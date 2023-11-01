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
// const auth = getAuth(app);
const utilisateurs = collection(db, 'utilisateurs');
const users = collection(db, 'users');
//--------------utilisateurs------------
getDocs(utilisateurs).then((snapshot) => {
  //rrécuper les données
  let utilisateurs = [];
  snapshot.docs.forEach((doc) => {
    utilisateurs.push({ ...doc.data(), id: doc.id });
  });
  console.log(utilisateurs);
});
//-------------users----------------
getDocs(users).then((snapshot) => {
  //rrécuper les données
  let users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  console.log(users);
});

//--------DOM---------------------
const submit = document.querySelector('.signup');
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = submit.email.value;
  const password = submit.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('utilisateur inscrit:', cred.user);
      submit.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//----------------------new projet---------------------
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
// import {
//   getDatabase,
//   ref,
//   set,
//   child,
// } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCapWD8dc3uaokouNrzlWiGE6T9MBtaxqE',
//   authDomain: 'formjs-72d03.firebaseapp.com',
//   projectId: 'formjs-72d03',
//   storageBucket: 'formjs-72d03.appspot.com',
//   messagingSenderId: '31328251478',
//   appId: '1:31328251478:web:f251da2c4e4688b51f55f7',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //-----get ref to database services------------

// const db = getDatabase(app);

// document.getElementById('submit').addEventListener('click', function (e) {
//   set(ref(db, 'email/' + document.getElementById('email').value), {
//     email: document.getElementById('email').value,
//     password: document.getElementById('password').value,
//   });
//   alert('login Succesfull');
// });
