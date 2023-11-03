import { initializeApp } from "firebase/app";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
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

// service de firestore
const db = getFirestore(app);

const btnAjouter = document.getElementById("ajouter");
const btnModifier = document.getElementById("modifier");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const matiere = document.getElementById("matiere");
const coordonnee = document.getElementById("coordonnee");
const classe = document.getElementById("classe");



const professeurs = collection(db, "professeurs");
const employer = collection(db, "employer")

getDocs(professeurs);
// .then((snapchot) => {
//   let professeurs = [];
//   snapchot.docs.forEach((doc) => {
//     professeurs.push({ ...doc.data(), id: doc.id });
//   });
//   console.log( professeurs );
//   afficherUtilisateur(professeurs);
// })
// .catch((err) => {});

onSnapshot(professeurs, (snapchot) => {
  let professeurs = [];
  snapchot.docs.forEach((doc) => {
    professeurs.push({ ...doc.data(), id: doc.id });
  });
 
  afficherUtilisateur(professeurs);
});

onSnapshot(employer, (snapchot) => {
  let employer = [];
  snapchot.docs.forEach((doc) => {
    employer.push({ ...doc.data(), id: doc.id });
  });
  console.log(employer);
  // afficherUtilisateur(professeurs);
});

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
  e.preventDefault();

  //Ajouter un nouveau document avec un id généré
});

function afficherUtilisateur(utilisateurs) {
  const contenu = document.getElementById("container");
  contenu.innerHTML = "";
  // console.log(utilisateurs.length);
  utilisateurs.forEach((utilisateur) => {
    let ligne = document.createElement("tr");
    ligne.innerHTML = `
      <td class="mx-auto text-center p-0 py-2 d-none d-lg-block">${utilisateur.nom}</td>
      <td class="mx-auto text-center p-0">${utilisateur.prenom}</td>
      <td class="mx-auto text-center p-0">${utilisateur.matiere}</td>
      <td class="mx-auto text-center p-0">${utilisateur.coordonnee}</td>
      <td class="mx-auto text-center p-0 ">${utilisateur.classe}</td>
      <td class="mx-auto text-center p-0">
          <button   class="btn bouton my-1 mx-1 supprimer text-white rounded-circle" data-id=${utilisateur.id}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
          class="btn bouton  modifier ms-0 ms-lg-2 my-1 mx-1 rounded-circle text-white"  onclick="modification('${utilisateur.id}')" data-id=${utilisateur.id}
        >
          <i class="fa-solid fa-pencil"></i>
        </button>
        </td>
      `;
    contenu.appendChild(ligne);

    const boutonsModifier = document.querySelectorAll(".modifier");
    boutonsModifier.forEach((bouton) => {
      bouton.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        console.log({ id });
        const professeurModifier = utilisateurs.find((u) => u.id === id);
        console.log(professeurModifier);

        nom.value = professeurModifier.nom;
        prenom.value = professeurModifier.prenom;
        matiere.value = professeurModifier.matiere;
        coordonnee.value = professeurModifier.coordonnee;
        classe.value = professeurModifier.classe;

        btnModifier.style.display = "block";
        btnAjouter.style.display = "none";

        btnModifier.addEventListener("click", (e) => {
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
      });
    });
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("supprimer")) {
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
  updateDoc(docRef, nouveauProfesseur);

  console.log("Document modifié avec succès !");
}
