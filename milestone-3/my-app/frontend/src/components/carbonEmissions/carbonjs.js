// document.addEventListener('DOMContentLoaded', function() {
//     const transportationData = {
//       "Gasoline Car": 540.2211599999999,
//       "Diesel Car": 585.23959,
//       "Electric Car": 225.09215,
//       "Bus": 360.14744,
//       "Train": 135.05528999999999,
//       "Airplane": 1125.46075,
//       "Biking": 45.01843,
//       "Walking": 22.509215
//     };
  
//     const labels = Object.keys(transportationData);
//     const values = Object.values(transportationData);
  
//     const ctx = document.getElementById('transportationChart').getContext('2d');
  
//     const transportationChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Carbon Emissions (kg CO2e)',
//           data: values,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)',
//             'rgba(255, 99, 71, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(255, 159, 64, 1)',
//             'rgba(255, 205, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(201, 203, 207, 1)',
//             'rgba(255, 99, 71, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         },
//         plugins: {
//           legend: {
//             labels: {
//               generateLabels: function(chart) {
//                 return [{
//                   text: 'Carbon Emissions (kg CO2e)',
//                   fillStyle: 'rgba(75, 0, 130, 1)',
//                   strokeStyle: 'rgba(75, 0, 130, 1)',
//                   lineWidth: 1
//                 }];
//               }
//             }
//           }
//         }
//       }
//     });
//   });
  