import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './TransportationChart.css';

const TransportationChart = () => {
  useEffect(() => {
    const transportationData = {
      "Gasoline Car": 540.2211599999999,
      "Diesel Car": 585.23959,
      "Electric Car": 225.09215,
      "Bus": 360.14744,
      "Train": 135.05528999999999,
      "Airplane": 1125.46075,
      "Biking": 45.01843,
      "Walking": 22.509215,
    };

    const labels = Object.keys(transportationData);
    const values = Object.values(transportationData);

    const ctx = document.getElementById('transportationChart').getContext('2d');

    const transportationChart = new Chart(ctx, {
      // ... (same chart configuration from your script.js)
    });

  }, []);

  return (
    <div className="transportation-chart-container">
      <h1>Carbon Emissions Released (Transportation Mode)</h1>
      <canvas id="transportationChart" width="800" height="400"></canvas>
    </div>
  );
};

export default TransportationChart;
