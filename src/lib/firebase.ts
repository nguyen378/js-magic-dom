import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBfrDeleXaXncIiV0xvr3DPE9TJ2YkKJ3w",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "web-client-85901.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "web-client-85901",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "web-client-85901.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "466609938525",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:466609938525:web:8626e4701a599a8de6edb4",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-2SJ1G15CEG"
};

// Initialize Firebase safely for Next.js SSR / Fast Refresh
const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Ignore analytics errors in unsupported environments
  });
}

export { app, auth, db, googleProvider, analytics };
