// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg1n2LFN0zNwUma7YfmkfZ_Jy0zG--YCM",
  authDomain: "e-commerce-db-136ee.firebaseapp.com",
  projectId: "e-commerce-db-136ee",
  storageBucket: "e-commerce-db-136ee.appspot.com",
  messagingSenderId: "996782817905",
  appId: "1:996782817905:web:f464a8dc275f4c1f8191d0",
  measurementId: "G-48KY56BF0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectonAndDocuments = async (collectionkey, objecttoAdd) => {
  const colletionRef = collection(db, collectionkey);
  const batch = writeBatch(db);
  objecttoAdd.forEach(object => {
    const docRef = doc(colletionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};
export const getCategoriesAdnDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  });
  return categoryMap;
};

export const CreateUserDocumentFormAuth = async (
  userAuth,
  ...aditionalInfo
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...aditionalInfo,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email == "" || password == "") return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (email == "" || password == "") return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = callback => {
  onAuthStateChanged(auth, callback);
};
