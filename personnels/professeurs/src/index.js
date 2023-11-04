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

const professeurs = collection(db, "professeurs")


const btnAjouter = document.getElementById("ajouter");
const btnModifier = document.getElementById("modifier");
const prenom = document.getElementById("prenom");
const matiere = document.getElementById("matiere");
const coordonnee = document.getElementById("coordonnee");
const classe = document.getElementById("classe");
let proff 
let id

getDocs(professeurs);

onSnapshot(professeurs, (snapchot) => {
    let professeurs = []
    snapchot.docs.forEach(doc => {
        professeurs.push({...doc.data(), id: doc.id})
    });
    console.log(professeurs);
    proff = professeurs
    const contenu = document.getElementById("container");
  contenu.innerHTML = "";
  // console.log(utilisateurs.length);
  professeurs.forEach((utilisateur) => {
    let ligne = document.createElement("tr");
    ligne.innerHTML = `
    <td class="mx-auto text-center d-none d-lg-block m-0">${utilisateur.nom}</td>
    <td class="mx-auto text-center m-0 ">${utilisateur.prenom}</td>
    <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.matiere}</td>
    <td class="mx-auto  text-center m-0 ">${utilisateur.coordonnee}</td>
    <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.classe}</td>
    <td class="mx-auto text-center m-0 py-auto ">
        <button   class="btn bouton me-1 my-1 supprimer text-white rounded-circle" data-id=${utilisateur.id}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
        class="btn bouton  modifier me-1 my-1 rounded-circle text-white"  data-id=${utilisateur.id}
      >
        <i class="fa-solid fa-pencil"></i>
      </button>
      </td>
      `;
      
    contenu.appendChild(ligne);
  })
})

// Enregistrer des données dans le Firebase
const form = document.querySelector(".addToFirebase");
btnAjouter.addEventListener("click", (e) => {
  e.preventDefault();

  //Ajouter un nouveau document avec un id généré
  addDoc(professeurs, {
    nom: form.nom.value,
    prenom: form.prenom.value,
    matiere: form.matiere.value,
    classe: form.classe.value,
    coordonnee: form.coordonnee.value,
  }).then(() => form.reset());
});





btnModifier.addEventListener("click", (e) => {
  e.preventDefault()
  
  console.log("nom");
  btnModifier.style.display = "none";
  btnAjouter.style.display = "block";

  const nouveauProfesseur = {
    nom: nom.value,
    prenom: prenom.value,
    matiere: matiere.value,
    coordonnee: coordonnee.value,
    classe: classe.value,
  };

  console.log(nouveauProfesseur);
  modifierUtilisateur(id, nouveauProfesseur);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modifier")) {
     id = e.target.getAttribute("data-id");
    const professeurModifier = proff.find((u) => u.id === id);
    console.log(professeurModifier);

        nom.value = professeurModifier.nom;
        prenom.value = professeurModifier.prenom;
        matiere.value = professeurModifier.matiere;
        coordonnee.value = professeurModifier.coordonnee;
        classe.value = professeurModifier.classe;

        btnModifier.style.display = "block";
        btnAjouter.style.display = "none";

       
  } else if (e.target.classList.contains("supprimer")) {
    const id = e.target.getAttribute("data-id");
    supprimerUtilisateur(id);
    console.log(id);
  } 
});

function supprimerUtilisateur(id) {
  const docRef = doc(db, "professeurs", id);
  deleteDoc(docRef)
    .then(() => {
      console.log("Document supprimé avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression du document : ", error);
    });
}

function modifierUtilisateur(id, nouveauProfesseur) {
  const docRef = doc(db, "professeurs", id);
  updateDoc(docRef, nouveauProfesseur)
  .then(() => {
    form.reset()
    console.log("Document modifié avec succès !");
  }) 
}