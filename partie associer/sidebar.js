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















