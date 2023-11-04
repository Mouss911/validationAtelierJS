import { initializeApp } from "firebase/app";

import { collection, updateDoc, getDocs, doc, deleteDoc, onSnapshot, getFirestore, addDoc } from "firebase/firestore";

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

const db = getFirestore(app)

const employer = collection(db, "employer")


const ajouterEmployer = document.getElementById("ajouterEmployer");
const modifierEmployer = document.getElementById("modifierEmployer");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const coordonnee = document.getElementById("coordonnee");
let proff 
let id

console.log(ajouterEmployer, modifierEmployer);
// getDocs(professeurs);
getDocs(employer)

onSnapshot(employer, (snapchot) => {
  let employer = []
  snapchot.docs.forEach(doc => {
    employer.push({...doc.data(), id: doc.id})
  });
  console.log(employer);
  proff = employer
  const contenu = document.getElementById("contenu");
contenu.innerHTML = "";
// console.log(utilisateurs.length);
employer.forEach((utilisateur) => {
  let ligne = document.createElement("tr");
  ligne.innerHTML = `
  <td class="mx-auto text-center d-none d-lg-block m-0">${utilisateur.nom}</td>
  <td class="mx-auto text-center m-0 ">${utilisateur.prenom}</td>
  <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.domaine}</td>
  <td class="mx-auto  text-center m-0 ">${utilisateur.coordonnee}</td>
  <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.adresse}</td>
  <td class="mx-auto text-center m-0 py-auto ">
      <button   class="btn bouton me-1 my-1 supprimer text-white rounded-circle" data-id=${utilisateur.id}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal1" 
      class="btn bouton  modifier me-1 my-1 rounded-circle text-white"  data-id=${utilisateur.id}
    >
      <i class="fa-solid fa-pencil"></i>
    </button>
    </td>
    `;
    
  contenu.appendChild(ligne);
})
})

const form = document.querySelector(".addToFirebase");
ajouterEmployer.addEventListener("click", (e) => {
  e.preventDefault();

  //Ajouter un nouveau document avec un id généré
  addDoc(employer, {
    nom: form.nom.value,
    prenom: form.prenom.value,
    domaine: form.domaine.value,
    adresse: form.adresse.value,
    coordonnee: form.coordonnee.value,
  }).then(() => form.reset());
});

modifierEmployer.addEventListener("click", (e) => {
  e.preventDefault()
  
  console.log("nom");
  modifierEmployer.style.display = "none";
  ajouterEmployer.style.display = "block";

  const nouveauProfesseur = {
    nom: nom.value,
    prenom: prenom.value,
    domaine: domaine.value,
    coordonnee: coordonnee.value,
    adresse: adresse.value,
  };

  console.log(nouveauProfesseur);
  modifierUtilisateur(id, nouveauProfesseur);
});

document.addEventListener("click", function (e) {
  e.preventDefault()
  if (e.target.classList.contains("modifier")) {
     id = e.target.getAttribute("data-id");
    const professeurModifier = proff.find((u) => u.id === id);
    console.log(professeurModifier);

        nom.value = professeurModifier.nom;
        prenom.value = professeurModifier.prenom;
        domaine.value = professeurModifier.domaine;
        coordonnee.value = professeurModifier.coordonnee;
        adresse.value = professeurModifier.adresse;

        modifierEmployer.style.display = "block";
        ajouterEmployer.style.display = "none";

       
  } else if (e.target.classList.contains("supprimer")) {
    const id = e.target.getAttribute("data-id");
    supprimerUtilisateur(id);
    console.log(id);
  } 
});

function supprimerUtilisateur(id) {
  const docRef = doc(db, "employer", id);
 

  deleteDoc(docRef)
    .then(() => {
      console.log("Document supprimé avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression du document : ", error);
    });
}

function modifierUtilisateur(id, nouveauProfesseur) {
  const docRef = doc(db, "employer", id);
  updateDoc(docRef, nouveauProfesseur)
  .then(() => {
    form.reset()
    console.log("Document modifié avec succès !");
  }) 
}