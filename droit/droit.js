document.getElementById("bouton").addEventListener("click", (e) => {
    
    const one = document.querySelector(".one");
    one.classList.add("transition-left");

    
    setTimeout(() => {
        one.style.display = "none";
        one.classList.remove("transition-left");
    }, 500); 

   
    document.querySelector(".center2").style.display = "block";
});

