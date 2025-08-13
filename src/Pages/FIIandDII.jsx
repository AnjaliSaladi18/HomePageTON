import React, { useState } from 'react';
import './FIIandDII.css';
import Header from '../components/TrainingCards/Header';
import Footer from '../components/TrainingCards/Footer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function FIIandDII() {
  const datasets = {
    daily: {
      labels: ["28 Jul", "27 Jul", "26 Jul", "25 Jul", "24 Jul", "23 Jul", "22 Jul", "21 Jul", "20 Jul", "19 Jul", "18 Jul", "17 Jul"],
      fii: [80117.71, 78213.47, 73345.43, 62399.32, 64274.25, 82796.13, 91442.02, 70923.58, 83130.42, 110135.28, 68367.93, 79392.73],
      dii: [-24300.05, -17932.45, -9490.54, -8291.00, -7609.42, -12390.17, -12635.58, -18637.99, -25513.43, -33144.78, -32574.63, -24734.28],
      overall: [55817.66, 60281.02, 63854.89, 54108.32, 56664.83, 70405.96, 78806.44, 52285.59, 57616.99, 76990.50, 35793.63, 54658.45]
    },
    weekly: {
      labels: ["28 Jul", "21 Jul", "14 Jul", "07 Jul", "30 Jun", "23 Jun", "16 Jun", "09 Jun", "02 Jun"],
      fii: [80117.71, 78213.47, 73345.43, 62399.32, 64274.25, 82796.13, 91442.02, 70923.58, 83130.42],
      dii: [-24300.05, -17932.45, -9490.54, -8291.00, -7609.42, -12390.17, -12635.58, -18637.99, -25513.43],
      overall: [55817.66, 60281.02, 63854.89, 54108.32, 56664.83, 70405.96, 78806.44, 52285.59, 57616.99]
    },
    monthly: {
      labels: ["April 2025","May 2025", "Jun 2025", "Jul 2025"],
      fii: [60376.48,40135.28, 83130.42, 62399.32 ],
      dii: [-29467.84,-33144.78, -25513.43, -8291.00 ],
      overall: [30908.64,6990.50, (83130.42 - 25513.43),(62399.32 - 8291.00)]
    },
    custom: {
      labels: ["16 Jun", "09 Jun", "02 Jun", "26 May"],
      fii: [91442.02, 70923.58, 83130.42, 110135.28],
      dii: [-12635.58, -18637.99, -25513.43, -33144.78],
      overall: [78806.44, 52285.59, 57616.99, 76990.50]
    }
  };

  const [view, setView] = useState('weekly');

  const chartData = {
    labels: datasets[view].labels,
    datasets: [
      {
        type: 'line',
        label: 'Net Overall Activity',
        data: datasets[view].overall,
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.6,
        fill: false
      },
      {
        type: 'bar',
        label: 'Net DII Activity',
        data: datasets[view].dii,
        backgroundColor: '#000000',
        barThickness: 20,
        borderRadius: 5
      },
      {
        type: 'bar',
        label: 'Net FII Activity',
        data: datasets[view].fii,
        backgroundColor: '#1976d2',
        barThickness: 20,
        borderRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { display: false },
        grid: { drawTicks: false }
      },
      y: {
        beginAtZero: true
      }
    }
  };
  const data = [
    { date: "12 Aug 2025", fiiBuy: 59593.29, fiiSell: 80117.71, diiBuy: 77311.75, diiSell: 53011.70 },
    { date: "11 Aug 2025", fiiBuy: 64660.56, fiiSell: 78213.47, diiBuy: 71907.48, diiSell: 53975.03 },
    { date: "08 Aug 2025", fiiBuy: 66673.86, fiiSell: 73345.43, diiBuy: 69033.33, diiSell: 59542.79 },
    { date: "07 Aug 2025", fiiBuy: 57888.20, fiiSell: 62399.32, diiBuy: 65952.48, diiSell: 57661.48 },
    { date: "06 Aug 2025", fiiBuy: 57669.69, fiiSell: 64274.25, diiBuy: 68527.37, diiSell: 60917.95 },
    { date: "05 Aug 2025", fiiBuy: 87219.40, fiiSell: 82796.13, diiBuy: 96472.49, diiSell: 84082.32 },
    { date: "04 Aug 2025", fiiBuy: 100151.62, fiiSell: 91442.02, diiBuy: 80350.36, diiSell: 67714.78 },
    { date: "01 Aug 2025", fiiBuy: 69777.07, fiiSell: 70923.58, diiBuy: 78732.59, diiSell: 60095.30 },
    { date: "31 Jul 2025", fiiBuy: 79564.54, fiiSell: 83130.42, diiBuy: 78932.38, diiSell: 53418.95 },
    { date: "30 Jul 2025", fiiBuy: 109716.92, fiiSell: 110135.28, diiBuy: 81205.51, diiSell: 48060.73 },
  ];

  return (
    <>
      <Header />
      <div className="activity-container">
        <h1>FII and DII Activity</h1>
        <div className="FII-DII-content">
          <h3>Determine the overall market direction with Stolo's FII-DII data.</h3>
          <p>Get detailed insights with capital market stats, derivatives data, and participant-wise analysis all in one place.</p>
          <div className="FII-DII-buttons">
            {['daily', 'weekly', 'monthly', 'custom'].map((period) => (
              <button
                key={period}
                className={view === period ? 'active' : ''}
                onClick={() => setView(period)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="FIIDII-chart-container">
        <Chart type='bar' data={chartData} options={options} />
        <div className="custom-legend">
          <span className="legend-item">
            <span className="legend-circle" style={{ background: '#1976d2' }}></span>
            Net FII Activity
          </span>
          <span className="legend-item">
            <span className="legend-circle" style={{ background: '#000000' }}></span>
            Net DII Activity
          </span>
          <span className="legend-item">
            <span className="legend-pill" style={{ background: '#000000' }}></span>
            Net Overall Activity
          </span>
        </div>
      </div>
      <div className="data-table-container" style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: 'hidden' }}>
        <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }} className='data-table'>
          <thead>
            <tr>
              <th rowSpan="2" style={{ padding: "13px" }}>Date</th>
              <th colSpan="3" style={{ borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: "13px" }}>FII Activity</th>
              <th colSpan="3" style={{ borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: "13px" }}>DII Activity</th>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ borderLeft: '1px solid #ddd' }}>Gross buy (₹ Cr)</th>
              <th >Gross sell (₹ Cr)</th>
              <th >Net buy/sell (₹ Cr)</th>
              <th style={{ borderLeft: '1px solid #ddd' }}>Gross buy (₹ Cr)</th>
              <th>Gross sell (₹ Cr)</th>
              <th>Net buy/sell (₹ Cr)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              const fiiNet = row.fiiBuy - row.fiiSell;
              const diiNet = row.diiBuy - row.diiSell;

              return (
                <tr key={i}>
                  <td >{row.date}</td>
                  <td style={{ borderLeft: '1px solid #ddd' }}>{row.fiiBuy.toLocaleString()}</td>
                  <td >{row.fiiSell.toLocaleString()}</td>
                  <td style={{ color: fiiNet >= 0 ? "green" : "red" }}>
                    {fiiNet >= 0 ? "+" : ""}{fiiNet.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td style={{ borderLeft: '1px solid #ddd' }}>{row.diiBuy.toLocaleString()}</td>
                  <td >{row.diiSell.toLocaleString()}</td>
                  <td style={{ color: diiNet >= 0 ? "green" : "red" }}>
                    {diiNet >= 0 ? "+" : ""}{diiNet.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="FIIDII-risk-disclosures-container">
        <h1>Risk Disclosure</h1>
        <p><b>Investment in securities market in subject to market risks. Read all related documents carefully before investing."</b><br /><br />Investments in equity, derivatives, and other securities are inherently subject to market fluctuations and other risks such as interest rate risk, liquidity risk, credit risk, and economic risk. Prices may rise or fall depending on various domestic and international factors beyond control. <br /><br />
          There is <b>no assurance or guarantee of returns</b> on any investment. Past performance of securities, strategies, or recommendations is <b>not indicative of future performance.</b><br /><br />
          The Research Analyst does not guarantee any profits or retums and shall not be held responsible for any losses incurred by users based on the research or opinions provided. Users are advised to consider their <b>risk tolerance, financial situation, and investment objectives</b> before acting on any recommendation.<br /><br />
          It is strongly recommended that users consult with a <b>SEBI-registered investment adviser or their personal financial advisor</b> before making any trading or investment decision.</p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FIIandDII;
