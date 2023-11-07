import { collection, onSnapshot, getFirestore } from "firebase/firestore";

export function nombreProfesseur() {
    const db = getFirestore()
    const professeurs = collection(db, "professeurs");
    onSnapshot(professeurs, (snapshot) => {
        let professeurs = [];
        snapshot.docs.forEach((doc) => {
          professeurs.push({ ...doc.data(), id: doc.id });
        });
        const nombreProfesseur = document.getElementById("proff");
        nombreProfesseur.innerHTML = professeurs.length;
      });
}

/*******************NOMBREEMPLOYER***************************** */
export function nombreEmployer(){
   const db = getFirestore()
  const employer = collection(db, "employer");


onSnapshot(employer, (snapshot) => {
  let employer = [];
  snapshot.docs.forEach((doc) => {
    employer.push({ ...doc.data(), id: doc.id});
    
  })
  //  console.log({employer});
   const nombreEmployer = document.getElementById('empl');
  //  console.log(nombreEmployer);
  nombreEmployer.innerHTML = employer.length
})
}

/***********************NOMBREASSOCIE********************************* */

export function nombreAssocie(){
  const db = getFirestore()
  
const associe = collection(db, "associe");
const nombreAssocie = document.getElementById('associe');
onSnapshot(associe, (snapshot) => {
  let associe = [];
  snapshot.docs.forEach((doc) => {
    associe.push({ ...doc.data(), id: doc.id});
  })
  // console.log(associe);
  nombreAssocie.innerHTML = associe.length

})
}

