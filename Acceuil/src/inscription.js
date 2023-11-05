// //Inscrire l'utilisateur

// document.addEventListener('DOMContentLoaded', function () {
//     // Votre code ici, y compris l'appel à 'addEventListener'
//     const signupForm = document.querySelector('.formulaireInscr');
//     console.log(signupForm);
//     signupForm.addEventListener('submit', () => {
//       const email = signupForm.email.value;
//       const password = signupForm.password.value;
    
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((cred) => {
//           console.log('utilisateur cree:', cred.user);
//           alert('inscription reussi !');
//           signupForm.reset();
//           // window.location.href="../dashbord/dashbord.html";
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     });
//   });

// inscription.js
import firebase from 'firebase/app'; // Assurez-vous que Firebase est correctement importé
import 'firebase/auth'; // Importez le module d'authentification Firebase si nécessaire
console.log("firebase");

// Configuration Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyD-fM4gIFoTLJ1JpOhMv5gt2sWUOnvE04E',
    authDomain: 'validation-js-ed9cc.firebaseapp.com',
    projectId: 'validation-js-ed9cc',
    storageBucket: 'validation-js-ed9cc.appspot.com',
    messagingSenderId: '991999981524',
    appId: '1:991999981524:web:2c9a66d419b81743454841',
};

// Initialisation de Firebase avec la configuration
firebase.initializeApp(firebaseConfig);


// Reste de la logique du formulaire d'inscription
function handleRegistration(event) {
  event.preventDefault();

  // Récupérer les données du formulaire (par exemple, email et mot de passe)
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Effectuer la création de l'utilisateur avec Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // L'utilisateur a été créé avec succès
      const user = userCredential.user;
      console.log('Utilisateur inscrit :', user);
    })
    .catch((error) => {
      // Gérer les erreurs lors de la création de l'utilisateur
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
    });
}

// Ajouter un gestionnaire d'événements pour le formulaire
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', handleRegistration);
