import { initializeApp } from 'firebase/app';
import {
  addDoc,
  getDatabase,
  ref,
  set,
  get,
  ChildUpdateFields,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithRedirect,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD-fM4gIFoTLJ1JpOhMv5gt2sWUOnvE04E',
  authDomain: 'validation-js-ed9cc.firebaseapp.com',
  projectId: 'validation-js-ed9cc',
  storageBucket: 'validation-js-ed9cc.appspot.com',
  messagingSenderId: '991999981524',
  appId: '1:991999981524:web:2c9a66d419b81743454841',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialisation des services
const db = getFirestore(app);
const auth = getAuth(app);
//---------------test------------
//Inscrire l'utilisateur
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', () => {
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('utilisateur cree:', cred.user);
      alert('inscription reussi !');
      signupForm.reset();
      // window.location.href="../dashbord/dashbord.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});
