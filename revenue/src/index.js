import { initializeApp } from "firebase/app";

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

//initialisation desservices
// Obtenez une référence à votre base de données Firestore
var db = firebase.firestore();

// Utilisez la référence pour obtenir les données en fonction de l'id
var type = "type";
var collectionRef = db.collection("votre_collection");
var query = collectionRef.where("type", "==", type);

query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // doc contient les données correspondantes à votre requête
    console.log(doc.data());
  });
});

