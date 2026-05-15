const ctx = document.getElementById('subsChart').getContext('2d');

const subsData = {
    labels: [
    'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
    'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
    ],
    datasets: [{
    label: 'Subscriptions',
    data: [120, 95, 150, 180, 210, 190, 175, 200, 230, 250, 270, 300],
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 2,
    fill: true,
    tension: 0.4,
    pointRadius: 5,
    pointBackgroundColor: '#fff',
    pointBorderColor: 'rgba(54, 162, 235, 1)',
    }]
};

const subsChart = new Chart(ctx, {
    type: 'line',
    data: subsData,
    options: {
    responsive: true,
    plugins: {
        legend: { display: true },
        title: {
        display: true,
        text: 'Abonări pe luni',
        font: { size: 18 }
        }
    },
    scales: {
        y: {
        beginAtZero: true,
        title: { display: true, text: 'Abonați' }
        },
        x: {
        title: { display: true, text: 'Lună' }
        }
    }
    }
});