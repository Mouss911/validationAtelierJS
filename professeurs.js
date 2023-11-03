const modal = document.querySelector(".ajout");
const form = document.querySelector(".shadow");
const btnAjouter = document.querySelector(".bg-green");
const container = document.querySelector(".container");

modal.addEventListener("click", () => {
  console.log(modal);
  form.style.display = "block";
  modal.style.display = "none";
});

btnAjouter.addEventListener("click", () => {
  console.log(btnAjouter);
  form.style.display = "none";
  modal.style.display = "block";
});

window.addEventListener("click", function (e) {
  // target
  if (e.target === form) {
    console.log(e.target);
    form.style.display = "none";
    modal.style.display = "block";
  }
});