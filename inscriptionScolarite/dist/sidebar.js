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
            data: [200000,120000,140000,300000,400000,300000,190000,200000,310000,150000,400000,300000],
            label: ["Dépense"],
            backgroundColor: [
                "black"
            ],
            borderColor: [
                "black"
            ],
            borderWidth: 1
        },
        {
            data: [475000,300000,400000,391000,450000,375000,330000,280000,400000,270000,490000,350000],
            label: ["Revenue"],
            backgroundColor: [
                "gray"
            ],
            borderColor: [
                "gray"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 500000,
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