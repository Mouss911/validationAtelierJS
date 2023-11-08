import {
  collection,
  doc,
  onSnapshot,
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

let emplo;

export function getEmployer() {
  const db = getFirestore();
  const employer = collection(db, "employer");

  onSnapshot(employer, (snapshot) => {
    let employer = [];
    snapshot.docs.forEach((doc) => {
      employer.push({ ...doc.data(), id: doc.id });
    });
    emplo = employer
    employer.sort((a, b) => b.dateDajout - a.dateDajout)
    gestionEmployer(employer)
    return employer
  });
}

export function gestionEmployer(utilisateurs) {
  
  const container = document.getElementById("contenu");

  

    container.innerHTML = "";
    // emplo = utilisateurs;
    // console.log(emplo);
    utilisateurs.forEach((utilisateur) => {
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
  }

  // function recherche(rechercheInput, emplo) {
  //   rechercheInput.addEventListener("input", (e) => {
  //     const elementSaisie = e.target.value;
  //     document.getElementById("contenu").innerHTML = "";
  //     const collectionFilter = emplo.filter(
  //       (element) =>
  //         element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||
  //         element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())
  //     );
  //     console.log(collectionFilter);
  //   });
  // }
  // const rechercheInput = document.getElementById("rechercheEmployer");

  // recherche(rechercheInput, emplo);
// }

export function ajouterEmployer(formEmployer) {
  const db = getFirestore();
  const employer = collection(db, "employer");
  const erreur = document.getElementById("erreur");
  if (
    formEmployer.nomEmplo.value &&
    formEmployer.prenomEmplo.value &&
    formEmployer.domaine.value &&
    formEmployer.adresse.value &&
    formEmployer.coordonneeEmplo.value
  ) {
    addDoc(employer, {
      nom: formEmployer.nomEmplo.value,
      prenom: formEmployer.prenomEmplo.value,
      domaine: formEmployer.domaine.value,
      adresse: formEmployer.adresse.value,
      coordonnee: formEmployer.coordonneeEmplo.value,
      dateDajout: serverTimestamp(),
    }).then(() => {
      formEmployer.reset();
      erreur.style.display = "none";
    });
  } else {
    erreur.style.display = "block";
    erreur.innerHTML = "Merci de remplir les champs ";

    console.log("Merci de remplir le champs");
  }
}

export function modifierEmployer(id, nouveauEmployer) {
  const db = getFirestore();
  const employer = collection(db, "employer");
  const docRef = doc(employer, id);
  const formEmployer = document.querySelector(".formEmployer");

  updateDoc(docRef, nouveauEmployer).then(() => {
    formEmployer.reset();
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



console.log(emplo);
export { emplo };
