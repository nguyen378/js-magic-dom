'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithPopup,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db, googleProvider } from '@/lib/firebase';
import { StorageService } from '@/lib/storage';
import { UserProgress } from '@/types/lesson';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  syncErrorMessage: string | null;
  signInWithGoogle: () => Promise<void>;
  signInGuest: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName?: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  syncWithCloud: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  syncStatus: 'idle',
  syncErrorMessage: null,
  signInWithGoogle: async () => {},
  signInGuest: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  resetPassword: async () => {},
  logout: async () => {},
  syncWithCloud: async () => false,
});

// Helper to remove any undefined fields before sending to Firestore
function sanitizeFirestoreData<T>(data: T): T {
  return JSON.parse(JSON.stringify(data, (key, value) => {
    return value === undefined ? null : value;
  }));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  const [syncErrorMessage, setSyncErrorMessage] = useState<string | null>(null);

  // Sync user progress with Firestore
  const syncWithCloud = async (): Promise<boolean> => {
    if (!auth.currentUser) {
      console.warn('Sync cancelled: No logged-in user.');
      return false;
    }
    try {
      setSyncStatus('syncing');
      setSyncErrorMessage(null);
      const uid = auth.currentUser.uid;
      const progressRef = doc(db, 'user_progress', uid);
      const userRef = doc(db, 'users', uid);

      // 1. Save user profile info
      const profileData = sanitizeFirestoreData({
        uid,
        displayName: auth.currentUser.displayName || (auth.currentUser.isAnonymous ? 'Khách tự do' : 'Học sinh'),
        email: auth.currentUser.email || null,
        photoURL: auth.currentUser.photoURL || null,
        isAnonymous: auth.currentUser.isAnonymous,
        lastLoginAt: new Date().toISOString(),
      });

      await setDoc(userRef, {
        ...profileData,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // 2. Fetch cloud progress
      const docSnap = await getDoc(progressRef);
      const localProgress = StorageService.getProgress();

      if (docSnap.exists()) {
        const cloudData = docSnap.data() as Partial<UserProgress>;
        
        // Merge cloud & local data
        const mergedCompleted = Array.from(
          new Set([...(localProgress.completedLessons || []), ...(cloudData.completedLessons || [])])
        );
        const mergedBadges = Array.from(
          new Set([...(localProgress.badges || []), ...(cloudData.badges || [])])
        );
        const mergedCustomCode = {
          ...(cloudData.customCode || {}),
          ...(localProgress.customCode || {}),
        };
        const mergedXP = Math.max(localProgress.xp || 0, cloudData.xp || 0);
        const mergedStreak = Math.max(localProgress.currentStreak || 1, cloudData.currentStreak || 1);
        const lastActiveDate = 
          (localProgress.lastActiveDate > (cloudData.lastActiveDate || '')) 
            ? localProgress.lastActiveDate 
            : (cloudData.lastActiveDate || localProgress.lastActiveDate);

        const mergedProgress: UserProgress = sanitizeFirestoreData({
          xp: mergedXP,
          completedLessons: mergedCompleted,
          currentStreak: mergedStreak,
          lastActiveDate,
          badges: mergedBadges,
          customCode: mergedCustomCode,
        });

        // Save back to local storage
        StorageService.saveProgress(mergedProgress);

        // Update cloud with merged progress
        await setDoc(progressRef, {
          ...mergedProgress,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } else {
        // First time cloud sync: upload local progress
        const sanitizedLocal = sanitizeFirestoreData(localProgress);
        await setDoc(progressRef, {
          ...sanitizedLocal,
          updatedAt: serverTimestamp(),
        });
      }

      setSyncStatus('synced');
      setTimeout(() => setSyncStatus('idle'), 3000);
      return true;
    } catch (error: unknown) {
      console.error('Error syncing with cloud:', error);
      const err = error as { code?: string; message?: string };
      let humanMsg = 'Lỗi đồng bộ Firebase.';
      if (err.code === 'permission-denied') {
        humanMsg = 'Quyền truy cập bị từ chối. Hãy cập nhật Firestore Rules trên Firebase Console.';
      } else if (err.message) {
        humanMsg = err.message;
      }
      setSyncErrorMessage(humanMsg);
      setSyncStatus('error');
      setTimeout(() => setSyncStatus('idle'), 6000);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // Automatically sync when user logs in
        await syncWithCloud();
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google Sign In failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInGuest = async () => {
    try {
      setLoading(true);
      await signInAnonymously(auth);
    } catch (error) {
      console.error('Guest Sign In failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Email Sign In failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (email: string, password: string, displayName?: string) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
        setUser({ ...userCredential.user, displayName });
      }
    } catch (error) {
      console.error('Email Sign Up failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        syncStatus,
        syncErrorMessage,
        signInWithGoogle,
        signInGuest,
        signInWithEmail,
        signUpWithEmail,
        resetPassword,
        logout,
        syncWithCloud,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
