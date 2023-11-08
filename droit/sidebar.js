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




































































































// var x = window.matchMedia("(max-width: 767px)")
// var y = window.matchMedia("(min-width: 768px)")
//   menu.addEventListener("click", () => {
//     if (sidebar.style = "display: none") {
//       sidebar.style.display = "block"
//   } 
// //   if (sidebar.style = "display: block") {
// //     console.log('non');
// //     sidebar.style.display = "none"
// // }
// // else {
// //     sidebar.style.display = "none"
// //   }
//     // if (x.matches) {    
//     //   if (sidebar.classList.contains('displayBlock')) {
//     //     sidebar.classList.remove('displayBlock')
//     //     sidebar.style.display = 'none'
//     //     menu.style.marginLeft = '0px' 
//     //   } else {
//     //     sidebar.classList.add('displayBlock') 
//     //     sidebar.style.display = 'block'
//     //     closeBtn.style.display = 'none'
//     //     menu.style.marginLeft = '150px'   
//     //   }
//     //   console.log('no');
//     // } 
//     // if (y.matches){
//     //   if (sidebar.style.display == 'none') {
//     //     sidebar.style.display = 'block'       
//     //   } 
//     // }
    

//     // sidebar.classList.toggle('displayBlock')

//   });
//   menu.addEventListener("dblclick", () => {
//     console.log('yes');
//     if (sidebar.style = "display: block") {
//       sidebar.style.display = "none"
//   } 

// });
  
// else {
//   sidebar.style.display = 'block'
// }
// if (y.matches){
//   sidebar.style.display = 'block'  
// }











