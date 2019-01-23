import React from 'react';
import { Radar, defaults } from 'react-chartjs-2';
import './Chart.css';

const Chart = ({ data }) => {
  console.log(defaults);
  return (
    <div className="chart-wrapper">
      {data === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <Radar
          data={data}
          options={{ 
            animation: {
              easing: 'easeInOutQuart'
            },
            maintainAspectRatio: false,
            responsive: true,
            layout: {
              padding: 10,
            },
            scale: {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
              }
            },
            legend: { display: false },
            tooltips: {
              callbacks: {
                title(tooltipItem, data) {
                  return data.labels[tooltipItem[0].index];
                },
                label(tooltipItem, data) {
                  return ` ${data.datasets[0].data[tooltipItem.index]} %`;
                },
              },
            },
            displayColors: true,
          }}
        />
      )}
    </div>
  );
};

export default Chart;
