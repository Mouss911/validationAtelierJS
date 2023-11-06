const emailAdmin = document.querySelector('.input1')
const mdpAdmin = document.querySelector('.input2')
const btnConnexion = document.querySelector('.btnConnexion')

// console.log(emailAdmin,mdpAdmin,btnConnexion);

btnConnexion.addEventListener('click', ()=>{
    const emailAdminValide = "jesuisleboss@gmail.com"
    const mdpAdminValide = "Maybossbi2023"
    if (emailAdmin.value === emailAdminValide && mdpAdmin.value === mdpAdminValide){
        console.log("Conexxion reussit");
        window.location.href="inscription.html";
    }else{
        alert('Email ou mot de passe incorrect')
        emailAdmin.value = ""
        mdpAdmin.value = ""
        console.log("echec connexion");
    }
    
})