import { firebaseConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initializeApp

firebase.initializeApp(firebaseConfig);

// auth
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();

// googleAuth

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// user  profiler

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const timestamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};
