// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
    authDomain: "validation-atelier-js.firebaseapp.com",
    databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
    projectId: "validation-atelier-js",
    storageBucket: "validation-atelier-js.appspot.com",
    messagingSenderId: "466332062090",
    appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)

// const entreprise = collection(db, "entreprise");
const associe = collection(db, "associe");

console.log(associe);
const container = document.querySelector('.logo-entreprise')
getDocs(associe).then((snapshat) => {
    let associe = [];
    snapshat.docs.forEach((doc) => {
        associe.push({...doc.data(), id: doc.id});
    });
    console.log(associe);
    associe.forEach((ins) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button type="button" class="btn btn-dark text-warning">logo</button>
        <p >${ins.nom}</p>    
        `
        container.appendChild(div);
    });
});


const addToFirebase = document.querySelector(".addToFirebase");
console.log(addToFirebase);
addToFirebase.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    addDoc(associe, {
        nom : addToFirebase.nom.value,
        coordonnee : addToFirebase.coordonne.value,
        email : addToFirebase.email.value
    }).then(() => addToFirebase.reset());
})

