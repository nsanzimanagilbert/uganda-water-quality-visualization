import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bugweri District',
    },
  },
};

const labels =  [
                "Field Temperature", "Dissolved Oxygen", "Turbidity", "Colour (Apparent)",
                "pH", "Electrical Conductivity", "Total disolved solids",
                "Total Hardness as CaCO3", "Calcium hardness as CaCO3",
                "Magnesium hardness as CaCO3", "Calcium", "Magnesium", "Sodium",
                "Potassium", "Total Alkalinity", "Bicarbonates", "Fluoride",
                "Sulphates", "Chlorides", "Nitrates as N", "Nitrites as N",
                "Ammonium as N", "Phosphates as P", "Silica", "Mercury",
                "Lead", "E.coli"
            ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Makuutu subcounty borehole Results',
      data: [
                27, 5.1, 1.76, 0.5, 6.5, 359, 251, 160, 126, 34, 50, 8, 15, 5.2,
                152, 185, 0.09, 16.1, 2.8, 6.48, 0.0015, 0.006, 0.112, 53.2, 0.001,
                0.015, 1
            ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Busiimo Pri School Borehole Results',
      data: [
                28, 5.1, 1.95, 0.5, 6.4, 175, 123, 50, 30, 20, 12, 5, 16, 5.3, 50,
                61, 0.09, 7.4, 7.1, 6.92, 0.0015, 0.004, 0.107, 51.8, 0.001, 0.015,
                1
            ],
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
  ],
};

const SampleChartOne = () => {

  return (
    <Line options={options} data={data} />
  )
}

export default SampleChartOne
