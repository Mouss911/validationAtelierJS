import { initializeApp } from "firebase/app";

// import { collection, updateDoc, getDocs, doc, deleteDoc, onSnapshot, getFirestore, addDoc } from "firebase/firestore";

import { nombreProfesseur, nombreEmployer, nombreAssocie } from "./personnel.js";
import { proff, gestionProfesseurs, ajouterProfesseur, modifierProfesseur, supprimerProfesseur,  } from './professeurs.js';
import { gestionEmployer, ajouterEmployer, emplo, supprimerEmployer, modifierEmployer } from './employer.js';
import {   gestionAssocie, ajouterAssocier } from "./associe.js";

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

/*******PARTIE PROFESSEURS ET EMPLOYER******/
let id;


gestionProfesseurs();
gestionEmployer();

const form = document.querySelector(".addToFirebase");
const formEmployer = document.querySelector(".formEmployer");
const btnAjouter = document.getElementById("ajouter");
const btnModifier = document.getElementById("modifier");
const btnModifierEmplo = document.getElementById("modifierEmployer");
const ajouterEmpl = document.getElementById("ajouterEmployer");
const ajoutAsso = document.getElementById("ajoutAsso");
const formAssocie = document.getElementById("formAssocie");
const nom = document.getElementById("nom");
const nomEmplo = document.getElementById("nomEmplo");
const prenomEmplo = document.getElementById("prenomEmplo");
const coordonneeEmplo = document.getElementById("coordonneeEmplo");
const prenom = document.getElementById("prenom");
const matiere = document.getElementById("matiere");
const adresse = document.getElementById("adresse");
const domaine = document.getElementById("domaine");
const coordonnee = document.getElementById("coordonnee");
const classe = document.getElementById("classe");
const container = document.getElementById("container");

btnAjouter.addEventListener("click", (e) => {
  e.preventDefault();
  ajouterProfesseur(form);
  container.innerHTML = "";
  console.log(container);
});

ajouterEmpl.addEventListener("click", (e) => {
  e.preventDefault();
  ajouterEmployer(formEmployer);
  console.log("employer");
  // gestionProfesseurs();
});

btnModifier.addEventListener("click", (e) => {
  e.preventDefault();

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
  modifierProfesseur(id, nouveauProfesseur);

  container.innerHTML = "";
  console.log(container);
  gestionProfesseurs();
});

// supprimer et modifier un professeur
document.addEventListener("click", function (e) {
  e.preventDefault();
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
    // container.innerHTML = ""
    supprimerProfesseur(id);
    console.log(id);

    container.innerHTML = "";
    console.log(container);
    gestionProfesseurs();
  }
});

btnModifierEmplo.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("nom");
  btnModifierEmplo.style.display = "none";
  ajouterEmpl.style.display = "block";

  const nouveauEmployer = {
    nom: nomEmplo.value,
    prenom: prenomEmplo.value,
    domaine: domaine.value,
    coordonnee: coordonneeEmplo.value,
    adresse: adresse.value,
  };

  console.log(nouveauEmployer);
  modifierEmployer(id, nouveauEmployer);

  container.innerHTML = "";
  console.log(container);
  gestionEmployer();
});

// supprimer et modifier un employe
document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("modifier")) {
    id = e.target.getAttribute("data-id");
    const employerModifier = emplo.find((u) => u.id === id);
    console.log(emplo);
    console.log(employerModifier);

    nomEmplo.value = employerModifier.nom;
    prenomEmplo.value = employerModifier.prenom;
    domaine.value = employerModifier.domaine;
    coordonneeEmplo.value = employerModifier.coordonnee;
    adresse.value = employerModifier.adresse;

    btnModifierEmplo.style.display = "block";
    ajouterEmpl.style.display = "none";
  } else if (e.target.classList.contains("supprimer")) {
    const id = e.target.getAttribute("data-id");
    // container.innerHTML = ""
    supprimerEmployer(id);
    console.log(id);

    container.innerHTML = "";
    console.log(container);
    gestionEmployer();
  }
});

/* PARTIE ASSOCIER */

gestionAssocie();

  ajoutAsso.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(formAssocie);
  ajouterAssocier(formAssocie);
})
/*******PARTIE ACCUEIL**********/
nombreProfesseur();
nombreEmployer();
nombreAssocie();
