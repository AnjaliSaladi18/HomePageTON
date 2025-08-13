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
      fii: [30117.71, 38213.47, 33345.43, 32399.32, 24274.25, 22796.13, 31442.02, 30923.58, 40130.42, 40135.28, 17367.93, 29392.73],
      dii: [-24300.05, -17932.45, -10490.54, -18291.00, -7609.42, -12390.17, -12635.58, -18637.99, -25513.43, -33144.78, -12574.63, -24734.28],
      overall: [5817.66, 20281.02, 13854.89, 14108.32, 16664.83, 10405.96, 18806.44, 12285.59, 14616.99, 6990.50, 5793.63, 4658.45]
    },
    weekly: {
      labels: ["28 Jul", "21 Jul", "14 Jul", "07 Jul", "30 Jun", "23 Jun", "16 Jun", "09 Jun", "02 Jun"],
      fii: [30117.71, 38213.47, 33345.43, 32399.32, 24274.25, 22796.13, 31442.02, 30923.58, 30130.42],
      dii: [-24300.05, -17932.45, -10490.54, -18291.00, -7609.42, -12390.17, -12635.58, -18637.99, -25513.43],
      overall: [5817.66, 20281.02, 13854.89, 14108.32, 16664.83, 10405.96, 18806.44, 12285.59, 4616.99]
    },
    monthly: {
      labels: ["April 2025", "May 2025", "Jun 2025", "Jul 2025"],
      fii: [40376.48, 40135.28, 33130.42, 32399.32],
      dii: [-29467.84, -33144.78, -25513.43, -8291.00],
      overall: [10908.64, 6990.50, (33130.42 - 25513.43), (32399.32 - 8291.00)]
    },
    custom: {
      labels: ["16 Jun", "09 Jun", "02 Jun", "26 May"],
      fii: [41442.02, 30923.58, 43130.42, 20135.28],
      dii: [-12635.58, -18637.99, -25513.43, -13144.78],
      overall: [28806.44, 12285.59, 17616.99, 6990.50]
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
        borderRadius: 2
      },
      {
        type: 'bar',
        label: 'Net FII Activity',
        data: datasets[view].fii,
        backgroundColor: '#1976d2',
        barThickness: 20,
        borderRadius: 2
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
        grid: {
          drawOnChartArea: false,
          drawTicks: false
        },
        border: { display: false }
      },
      y: {
        beginAtZero: true,
        border:{display:false}
      }
    }
  };
  const data = [
    { date: "12 Aug 2025", fiiBuy: 70766.35, fiiSell: 40648.64, diiBuy: 77311.75, diiSell: 53011.70 },
    { date: "11 Aug 2025", fiiBuy: 64573.64, fiiSell: 26360.17, diiBuy: 71907.48, diiSell: 53975.03 },
    { date: "08 Aug 2025", fiiBuy: 57964.64, fiiSell: 24619.21, diiBuy: 69033.33, diiSell: 59542.79 },
    { date: "07 Aug 2025", fiiBuy: 76004.96, fiiSell: 43645.64, diiBuy: 65952.48, diiSell: 57661.48 },
    { date: "06 Aug 2025", fiiBuy: 44919.89, fiiSell: 20645.64, diiBuy: 68527.37, diiSell: 60917.95 },
    { date: "05 Aug 2025", fiiBuy: 37219.40, fiiSell: 14423.27, diiBuy: 96472.49, diiSell: 84082.32 },
    { date: "04 Aug 2025", fiiBuy: 30144.54, fiiSell: 61586.56, diiBuy: 80350.36, diiSell: 67714.78 },
    { date: "01 Aug 2025", fiiBuy: 59358.22, fiiSell: 28434.64, diiBuy: 78732.59, diiSell: 60095.30 },
    { date: "31 Jul 2025", fiiBuy: 34652.32, fiiSell: 74782.60, diiBuy: 78932.38, diiSell: 53418.95 },
    { date: "30 Jul 2025", fiiBuy: 65628.62, fiiSell: 25493.34, diiBuy: 81205.51, diiSell: 48060.73 },
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
      <div className="data-table-container" style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: 'hidden',borderBottom: 'none' }}>
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
                  <td style={{ borderBottom: '1px solid #ddd'}}>{row.date}</td>
                  <td style={{ borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>{row.fiiBuy.toLocaleString()}</td>
                  <td style={{ borderBottom: '1px solid #ddd'}}>{row.fiiSell.toLocaleString()}</td>
                  <td style={{ color: fiiNet >= 0 ? "green" : "red" , borderBottom: '1px solid #ddd'}}>
                    {fiiNet >= 0 ? "+" : ""}{fiiNet.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td style={{ borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>{row.diiBuy.toLocaleString()}</td>
                  <td style={{ borderBottom: '1px solid #ddd'}}>{row.diiSell.toLocaleString()}</td>
                  <td style={{ color: diiNet >= 0 ? "green" : "red", borderBottom: '1px solid #ddd' }}>
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
