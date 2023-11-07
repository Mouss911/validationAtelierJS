import {getFirestore, collection, onSnapshot, addDoc} from "firebase/firestore";

export function gestionAssocie() {
    const db = getFirestore()

// const entreprise = collection(db, "entreprise");
const associe = collection(db, "associe");

console.log(associe);
onSnapshot(associe, (snapshot) =>{
    let associe = [];
    snapshot.docs.forEach((doc) => {
        associe.push({...doc.data(), id: doc.id});
    });
    console.log(associe);
    const logoEntreprise = document.querySelector('#logo-entreprise')
    logoEntreprise.innerHTML = ""
    associe.forEach((ins) => {
        const div = document.createElement('div');
        div.className = "col-lg-2 align-items-center"
        div.innerHTML = `
        <button type="button" class="btn btn-dark color-text">logo</button>                                                            
        <p >${ins.nom}</p>   
        `
        logoEntreprise.appendChild(div);
    });
})
}

export function ajouterAssocier(formAssocie) {
    const db = getFirestore();
    const associe = collection(db, "associe");
  
    addDoc(associe, {
      nom: formAssocie.nomAss.value,
      coordonnee: formAssocie.coordonneeAss.value,
      email: formAssocie.emailAss.value,
      
    }).then(() => {
        console.log(formAssocie.nomAss.value);
        formAssocie.reset()
    });
  }