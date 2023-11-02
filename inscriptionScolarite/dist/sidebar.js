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



// PARTIE MOUSSA
const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "line",
    data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aout", "Sep"],
        datasets: [{
            data: [16,12,14,13,7,8,15,2,3,9,5,1],
            label: ["Dépense"],
            backgroundColor: [
                "red"
            ],
            borderColor: [
                "blue"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 35,
                tricks: {
                    font: {
                        size: 20
                    }
                }
            },
            x: {
                tricks: {
                    font: {
                        size: 20
                    }
                }
            }
        }
    }
})