import {
  collection,
  doc,
  onSnapshot,
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

let emplo;

export function gestionEmployer() {
  const db = getFirestore();
  const employer = collection(db, "employer");
  const container = document.getElementById("contenu");

  onSnapshot(employer, (snapshot) => {
    let employer = [];
    snapshot.docs.forEach((doc) => {
      employer.push({ ...doc.data(), id: doc.id });
    });

    container.innerHTML = "";
    emplo = employer;
    console.log(emplo);
    employer.forEach((utilisateur) => {
      let ligne = document.createElement("tr");
      ligne.innerHTML = `
                <td class="mx-auto text-center d-none d-lg-block m-0">${utilisateur.nom}</td>
                <td class="mx-auto text-center m-0">${utilisateur.prenom}</td>
                <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.domaine}</td>
                <td class="mx-auto text-center m-0">${utilisateur.coordonnee}</td>
                <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.adresse}</td>
                <td class="mx-auto text-center m-0 py-auto ">
                    <button class="btn bouton me-1 my-1 supprimer text-white rounded-circle" data-id=${utilisateur.id}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal1" 
                        class="btn bouton modifier me-1 my-1 rounded-circle text-white" data-id=${utilisateur.id}>
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                </td>
            `;

      container.appendChild(ligne);
    });
  });

   function recherche(rechercheInput, emplo) {
    rechercheInput.addEventListener("input", (e) => {
      const elementSaisie = e.target.value;
      document.getElementById("contenu").innerHTML = ""
      const collectionFilter = emplo.filter(
        (element) =>
          element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||
          element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())
      );
      console.log(collectionFilter);
    });
  }
  const rechercheInput = document.getElementById("rechercheEmployer")
 
  recherche(rechercheInput, emplo)
}

export function ajouterEmployer(formEmployer) {
  const db = getFirestore();
  const employer = collection(db, "employer");

  addDoc(employer, {
    nom: formEmployer.nomEmplo.value,
    prenom: formEmployer.prenomEmplo.value,
    domaine: formEmployer.domaine.value,
    adresse: formEmployer.adresse.value,
    coordonnee: formEmployer.coordonneeEmplo.value,
  }).then(() => formEmployer.reset());
}

export function modifierEmployer(id, nouveauEmployer) {
  const db = getFirestore();
  const employer = collection(db, "employer");
  const docRef = doc(employer, id);
  const formEmployer = document.querySelector(".formEmployer");
  updateDoc(docRef, nouveauEmployer).then(() => {
    formEmployer.reset()
    console.log("Document modifié avec succès !");
    
  });
}

export function supprimerEmployer(id) {
  const db = getFirestore();
  const employer = collection(db, "employer");
  const docRef = doc(employer, id);
  
  deleteDoc(docRef).then(() => {
    console.log("Document supprimé avec succès !");
  });
}

export { emplo };
// console.log(emplo);


