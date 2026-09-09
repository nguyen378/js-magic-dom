import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';

export type FeedbackCategory = 'bug' | 'content' | 'feature' | 'rating' | 'other';

export interface FeedbackPayload {
  category: FeedbackCategory;
  rating?: number | null; // 1 to 5
  message: string;
  userName?: string | null;
  userEmail?: string | null;
  lessonId?: string | null;
  lessonTitle?: string | null;
  course?: string | null;
  userCode?: string | null;
  attachCode?: boolean;
}

export interface FeedbackRecord extends Omit<FeedbackPayload, 'attachCode'> {
  id?: string;
  userId: string;
  isAnonymous: boolean;
  userName: string;
  userEmail: string | null;
  browserInfo: {
    userAgent: string;
    language: string;
    screenResolution: string;
    url: string;
  };
  status: 'new' | 'reviewed' | 'resolved';
  createdAt: unknown;
}

// Clean undefined fields for Firestore compatibility
function sanitizeData<T>(data: T): T {
  return JSON.parse(JSON.stringify(data, (key, value) => {
    return value === undefined ? null : value;
  }));
}

/**
 * Send student feedback to Firebase Firestore `feedbacks` collection
 */
export async function sendFeedbackToFirebase(payload: FeedbackPayload): Promise<string> {
  const currentUser = auth.currentUser;

  const browserInfo = typeof window !== 'undefined'
    ? {
        userAgent: navigator.userAgent || 'Unknown',
        language: navigator.language || 'vi',
        screenResolution: `${window.innerWidth}x${window.innerHeight}`,
        url: window.location.href,
      }
    : {
        userAgent: 'SSR',
        language: 'vi',
        screenResolution: '0x0',
        url: '',
      };

  const feedbackData = sanitizeData({
    userId: currentUser?.uid || 'anonymous_guest',
    isAnonymous: currentUser ? currentUser.isAnonymous : true,
    userName: currentUser?.displayName || payload.userName || (currentUser?.isAnonymous ? 'Học sinh (Khách)' : 'Học sinh'),
    userEmail: currentUser?.email || payload.userEmail || null,
    category: payload.category || 'other',
    rating: payload.rating || null,
    message: payload.message.trim(),
    lessonId: payload.lessonId || null,
    lessonTitle: payload.lessonTitle || null,
    course: payload.course || null,
    userCode: payload.attachCode && payload.userCode ? payload.userCode : null,
    browserInfo,
    status: 'new',
  });

  const feedbacksCol = collection(db, 'feedbacks');
  const docRef = await addDoc(feedbacksCol, {
    ...feedbackData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
