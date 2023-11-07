let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn');
let menu = document.querySelector('#menu');
let myContain = document.querySelector('.myContain');
menu.style.color = '#ffffff7e';

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  myContain.classList.toggle('col-md-11');
  myContain.classList.toggle('offset-md-1');
});
menu.addEventListener('click', () => {
  if (sidebar.classList.contains('displayBlock')) {
    sidebar.classList.remove('displayBlock');
    sidebar.style.display = 'none';
    // myContain.classList.add('col-md-11');
    // myContain.classList.add('offset-md-1');
    menu.style.marginLeft = '0px';
  } else {
    sidebar.classList.add('displayBlock');
    sidebar.style.display = 'block';
    closeBtn.style.display = 'none';
    menu.style.marginLeft = '150px';
  }
});


