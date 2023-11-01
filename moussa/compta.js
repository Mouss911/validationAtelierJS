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