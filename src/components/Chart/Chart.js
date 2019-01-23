import React from 'react';
import { Polar, Radar } from 'react-chartjs-2';
import './Chart.css';
const scale = {
  ticks: {
    suggestedMin: 0,
    suggestedMax: 50,
  }
}
const callbacks = {
  title(tooltipItem, data) {
    return data.labels[tooltipItem[0].index];
  },
  label(tooltipItem, data) {
    return ` ${data.datasets[0].data[tooltipItem.index]} %`;
  },
}
const style = {
  displayColors: true,
}
const options = {
  maintainAspectRatio: false,
  responsive: true,
  layout: {
    padding: 10,
  },
  scale: scale,
  legend: { display: false },
  tooltips: {
    callbacks: callbacks
  },
  style
}
const Chart = ({ data, type }) => {
  const chart = type==="Polar"?<Polar data={data} options={options}/> : <Radar data={data} options={options}/>;
  return (
    <div className="chart-wrapper">
      {data === undefined ? (
        <h2>Loading...</h2>
      ) : (
        chart
      )}
    </div>
  );
};

export default Chart;
