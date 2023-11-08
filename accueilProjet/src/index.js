import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const currentPath = window.location.pathname;
const inscriptionPath = "/dist/inscription.html";
const connexionPath = "/accueilProjet/dist/test.html";
const profilPath = "/dist/profil.html";

const handleRegistration = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const status = document.getElementById("status").value;
  const adresse = document.getElementById("adresse").value;
  const tel = document.getElementById("tel").value;
  const adresseecole = document.getElementById("adresseecole").value;
  const emailecole = document.getElementById("emailecole").value;
  const secteur = document.getElementById("secteur").value;
  const nomecole = document.getElementById("nomecole").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userData = {
      nom: nom,
      prenom: prenom,
      status: status,
      adresse: adresse,
      tel: tel,
      adresseecole: adresseecole,
      emailecole: emailecole,
      secteur: secteur,
      nomecole: nomecole,
    };

    const userRef = collection(db, "utilisateurs");
    await addDoc(userRef, userData);

    console.log(
      "Utilisateur enregistré avec succès dans la base de données Firestore"
    );
    // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Utilisateur connecté :", user);

    window.location.href = "/accueilProjet/dist/dashbord.html";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erreur lors de la connexion :", errorCode, errorMessage);
  }
};

const handleProfile = () => {

  database = firebase.database();
  var ref = database.ref('utilisateurs');
  ref.on('value', gotData, errData);

  function gotData(data){
    var utilisateurs = data.val();
    var keys = Object.keys(utilisateurs);
    console.log(keys);
  }


  // Vérifiez si l'utilisateur est connecté
  // const user = auth.currentUser;
  // console.log(user)


  // if (user) {
  //   // L'utilisateur est connecté, vous pouvez maintenant obtenir ses informations
  //   const userId = user.uid;

  //   // Accédez aux informations de l'utilisateur depuis Firebase Authentication
  //   user
  //     .getIdToken()
  //     .then((idToken) => {
  //       // IdToken contient le token d'identification de l'utilisateur
  //       console.log("Token d'identification de l'utilisateur :", idToken);

  //       // Vous pouvez utiliser le token pour récupérer des informations depuis un backend sécurisé si nécessaire

  //       // Mettez en œuvre la logique pour afficher les informations sur la page profil ici
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Erreur lors de la récupération du token d'identification de l'utilisateur :",
  //         error
  //       );
  //     });
  // } else {
  //   console.error("L'utilisateur n'est pas connecté.");
  //   // Vous pouvez rediriger l'utilisateur vers la page de connexion ici si nécessaire
  // }
};

if (currentPath === inscriptionPath) {
  console.log('page inscription')
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", handleRegistration);
} else if (currentPath === connexionPath) {
  console.log("page connexion");
  const loginForm = document.getElementById("signup");
  loginForm.addEventListener("submit", handleLogin);
} else if (currentPath === profilPath) {
  handleProfile();
  console.log("page profil");
}
