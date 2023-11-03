
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let menu = document.querySelector("#menu");
menu.style.color = '#ffffff7e';

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
menu.addEventListener("click", () => {
  
  if (sidebar.classList.contains('displayBlock')) {
    sidebar.classList.remove('displayBlock')
      sidebar.style.display = 'none'
      menu.style.marginLeft = '0px' 
  } else {
    sidebar.classList.add('displayBlock') 
    sidebar.style.display = 'block'
    closeBtn.style.display = 'none'
    menu.style.marginLeft = '150px'   
  }
});

import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from "firebase/firestore";

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

// Initialize la base de données Firestore
const db = getFirestore(app);

// const utilisateurs = collection(db, 'inscrAutreActivite');
const certiesRef = collection(db, 'mensualites');

getDocs(certiesRef).then((snapshot) => {
    let certiesRef = []; 
    snapshot.docs.forEach((doc) => {
        certiesRef.push({ ...doc.data(), id: doc.id });
    });

    });
    console.log(certiesRef);
// });
  
let mytbodyIns = document.querySelector('.mytbodyIns');
mytbodyIns.innerHTML = localStorage.getItem("stock");
  const myFormInscrip = document.querySelector(".myFormInscrip")
  
  myFormInscrip.addEventListener('submit', (e) => {
    e.preventDefault();
    //Ajouter un nouveau document avec un id généré
    addDoc(certiesRef, {
      prenom: myFormInscrip.prenomIns.value,
      nom: myFormInscrip.nomIns.value,
      etat: myFormInscrip.etatIns.value,
      classe: myFormInscrip.classe.value,
      type: myFormInscrip.type.value,
      dateDajout: serverTimestamp(),
    }).then(() => myFormInscrip.reset());

    
    let prenomIns = document.getElementById('prenomIns')
    let nomIns = document.getElementById('nomIns')
    // let etat = document.getElementById('etat')
    
      
      let ligneTr = document.createElement('tr');
      ligneTr.innerHTML = `
      <td class="text-start ps-2 border border-1">${prenomIns.value}</td> <td class="text-start ps-2 border border-1">${nomIns.value}</td> <td class=" myClick text-center fs-4 opacity-50 border border-1"><i class="fa-regular fa-eye"></i></td>`;
      
      mytbodyIns.appendChild(ligneTr);
      localStorage.setItem("stock", mytbodyIns.innerHTML)
  });

 
