import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Supprimez l'import en double
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGasjJ8iYoqmryBUugt7MQAjD5NlZWB5I",
  authDomain: "fir-demo-47a73.firebaseapp.com",
  projectId: "fir-demo-47a73",
  storageBucket: "fir-demo-47a73.appspot.com",
  messagingSenderId: "665908816987",
  appId: "1:665908816987:web:7cc4908d8319e36541637e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialisez l'objet Firestore

const currentPath = window.location.pathname;
const inscriptionPath = '/dist/inscription.html';
const connexionPath = '/dist/test.html';
const profilPath = '/dist/profil.html';

if (currentPath === inscriptionPath) {
  // Vous êtes sur la page d'inscription
  console.log("Vous êtes sur la page d'inscription")
  function handleRegistration(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const status = document.getElementById('status').value;
    const adresse = document.getElementById('adresse').value;
    const tel = document.getElementById('tel').value;
    const adresseecole = document.getElementById('adresseecole').value;
    const emailecole = document.getElementById('emailecole').value;
    const secteur = document.getElementById('secteur').value;
    const nomecole = document.getElementById('nomecole').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
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
          // Ajoutez ici d'autres données du formulaire
        };

        const userRef = collection(db, 'utilisateurs'); // Remplacez 'utilisateurs' par le nom de votre collection
        await addDoc(userRef, userData);

        console.log('Utilisateur enregistré avec succès dans la base de données Firestore');
        // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
      });
  }

  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', handleRegistration);

}else if (currentPath === connexionPath) {
  function handleLogin(event) {
    event.preventDefault();
  
    // Récupérez l'email et le mot de passe depuis le formulaire
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Connexion de l'utilisateur avec Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // L'utilisateur est connecté avec succès
        const user = userCredential.user;
        console.log('Utilisateur connecté :', user);

        window.location.href = 'dashbord.html'; // Remplacez par l'URL de la page souhaitée
      })
      .catch((error) => {
        // Gérer les erreurs lors de la connexion
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erreur lors de la connexion :", errorCode, errorMessage);
      });
  }
  
  // Ajouter un gestionnaire d'événements pour le formulaire de connexion
  const loginForm = document.getElementById('signup');
  loginForm.addEventListener('submit', handleLogin);
}else if (currentPath === profilPath) {
  console.log("page profil");
  // Vous êtes sur la page de profil
  console.log('auth.currentUser:', auth.currentUser);
  // Assurez-vous que l'utilisateur est connecté avant d'afficher les informations
  if (auth.currentUser) {
    // Récupérez l'utilisateur connecté
    const user = auth.currentUser;

    // Affichez les informations de l'utilisateur sur la page
    const userNameElement = document.getElementById('user-name');
    const userEmailElement = document.getElementById('user-email');

    if (userNameElement && userEmailElement) {
      console.log('userNameElement:', userNameElement);
      console.log('userEmailElement:', userEmailElement);

      // Mettez à jour les éléments HTML avec les informations de l'utilisateur
      userNameElement.innerHTML = user.displayName || 'Nom inconnu';
      userEmailElement.textContent = user.email || 'Email inconnu';
    }
  }
  
}
