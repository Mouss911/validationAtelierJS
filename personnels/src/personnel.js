import { collection, onSnapshot, getFirestore } from "firebase/firestore";

export function nombreProfesseurs() {
    const db = getFirestore();
    const professeurs = collection(db, "professeurs");
    const nombreProfesseur = document.getElementById("proff");

    onSnapshot(professeurs, (snapshot) => {
        let professeurs = [];
        snapshot.docs.forEach((doc) => {
            professeurs.push({ ...doc.data(), id: doc.id });
        });

        nombreProfesseur.innerHTML = professeurs.length;
    });
}

export function nombreEmployer() {
    const db = getFirestore();
    const employer = collection(db, "employer");
    const nombreEmployer = document.getElementById('empl');
    console.log(nombreEmployer);

    onSnapshot(employer, (snapshot) => {
        let employer = [];
        snapshot.docs.forEach((doc) => {
            employer.push({ ...doc.data(), id: doc.id });
        });

        nombreEmployer.innerHTML = employer.length;
    });
}
