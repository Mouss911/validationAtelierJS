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
const associés = collection(db, "associés");

// console.log(inscription);
const container = document.querySelector('.logo-entreprise')
getDocs(associés).then((snapshat) => {
    let associés = [];
    snapshat.docs.forEach((doc) => {
        associés.push({...doc.data(), id: doc.id});
    });
    console.log(associés);
    associés.forEach((ins) => {
        const div = document.createElement('div');
        div.innerHTML = 
        `<div id="image-container">
        <button type="button" class="btn btn-dark text-warning"><br><img id="image" src="" alt="Image"></button>
        <p >${ins.nom}</p>    
        </div>`
        container.appendChild(div);
    });
});



const fileInput = document.getElementById("fileInput");
const imageContainer = document.getElementsByClassName("image-container");
const image = document.getElementById("image");
console.log(image);
        
fileInput.addEventListener("change", function() {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const imageURL = URL.createObjectURL(selectedFile);
        image.src = imageURL;
        imageContainer.style.display = "block";
        } else {
            imageContainer.style.display = "none";                                                                                                                                                                                                                   
        }
});

const addToFirebase = document.querySelector(".addToFirebase");
console.log(addToFirebase);
addToFirebase.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    addDoc(associés, {
        nom : addToFirebase.nom.value,
        coordonnee : addToFirebase.coordonne.value,
        email : addToFirebase.email.value
    }).then(() => addToFirebase.reset());
})

