import { initializeApp } from "firebase/app";

import { onSnapshot, getFirestore, collection, doc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const professeurs = collection(db, "professeurs");

const nombreProfesseur = document.getElementById("proff");

onSnapshot(professeurs, (snapshot) => {
  let professeurs = [];
  snapshot.docs.forEach((doc) => {
    professeurs.push({ ...doc.data(), id: doc.id });
  });

  // console.log(professeurs);
  nombreProfesseur.innerHTML = professeurs.length;
});

// recuperer collection employer
const employer = collection(db, "employer");
const nombreEmployer = document.getElementById('empl');

onSnapshot(employer, (snapshot) => {
  let employer = [];
  snapshot.docs.forEach((doc) => {
    employer.push({ ...doc.data(), id: doc.id});
    
  })
   console.log({employer});
  nombreEmployer.innerHTML = employer.length
})
// recuperer la collection associe

const associe = collection(db, "associe");
const nombreAssocie = document.getElementById('empoie');
onSnapshot(associe, (snapshot) => {
  let associe = [];
  snapshot.docs.forEach((doc) => {
    associe.push({ ...doc.data(), id: doc.id});
  })
  console.log(associe);
  nombreAssocie.innerHTML = associe.length

})













// const db = getFirestore(app)

// const professeurs = collection(db, "professeurs")
// onSnapshot (professeurs, (snapshot) => {
//     let professeurs = [];
//     professeurs.docs.forEach((doc) => {
//         professeurs.push({ ...doc.data(), id: doc.id});
//     })
//     console.log(professeurs);
// })