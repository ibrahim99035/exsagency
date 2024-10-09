import React from 'react';
import { Chart } from 'primereact/chart';

const Charts = () => {
  const data = {
    labels: ['Users', 'Stores', 'Products'],
    datasets: [
      {
        label: 'Count',
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
        data: [12, 5, 8], // Replace with actual data from your state or props
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="charts">
      <h2>Dashboard Charts</h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default Charts;