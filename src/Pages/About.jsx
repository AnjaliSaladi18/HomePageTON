import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import Header from '../components/TrainingCards/Header';
import TradingBrokers from '../components/TrainingCards/TradingBrokers';
import Footer from '../components/TrainingCards/Footer';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            '#0a68ff',
            '#13213c',
            '#0a68ff',
            '#13213c',
            '#0a68ff',
            '#13213c',
            '#0a68ff'
        ],
        borderColor: [
            '#0a68ff',
            '#13213c',
            '#0a68ff',
            '#13213c',
            '#0a68ff',
            '#13213c',
            '#0a68ff'
        ],
        borderWidth: 1,
        barThickness:40
    }]
};
const lineData = {
    labels: labels,
    datasets: [
        {
            label: 'Open Interest Over Time',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#0a68ff',
            tension: 0.3,
        }
    ]
};

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true
        },
        title: {
            display: false 
        }
    }
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false, 
        },
        y: {
            display: false, 
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true
        }
    }
};
function About() {
    return (
        <section className="about">
            <Header></Header>
            <div className="landing-banner">
                <div className="banner-content">
                    <h1 className="banner-title">Your trusted partner in data-driven trading</h1>
                    <div className="banner-description">
                        <p>At TradeOnNumbers, we specialize in delivering powerful, actionable insights through in-depth Open Interest</p>
                        <div className="banner-buttons">
                            <button className="btn1">Get started</button>
                            <button className="btn2">Free trial</button>
                        </div>
                    </div>
                </div>
                <div className="banner-image">
                    <img src="/images/Banner Image.jpg" alt="BANNERIMAGE" />
                </div>
            </div>
            <div className="tagline-banner">
                <p className="taglinebanner_label1">AT TRADEONNUMBERS</p>
                <p className="taglinebanner_label2">We Don't Just Analyze Numbers</p>
                <p className="taglinebanner_label3">We Make Them Talk.</p>
            </div>
            <button className="experice">
                EXPERTISE
            </button>
            <div className="services-container">
                <div className="services-content">
                    <h1>Decoding</h1>
                    <h3>Futures & Options</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed, ratione quaerat magni quis minus repudiandae! Molestiae iusto quaerat delectus commodi eligendi distinctio autem recusandae.</p>
                    <button>Join us</button>
                </div>
                <div className="services-image">
                    <div
                        className="chart-container"
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '0',
                            backgroundColor: 'transparent',
                            borderRadius: '0',
                            boxShadow: 'none'
                        }}
                    >
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
            <div className="analytics-container">
                <div className="analytics-image">
                    <div
                        className="chart-container"
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '0',
                            backgroundColor: 'transparent',
                            borderRadius: '0',
                            boxShadow: 'none'
                        }}
                    >
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
                <div className="analytics-content">
                    <h1>Open Interest</h1>
                    <h3>Analytics</h3>
                    <p>By focusing on Open Interest analytics, we reveal the subtle shifts in market sentiment, identify trend changes before they unfold, and support strategic decision-making backed by real-time data. Whether you're an experienced trader or just starting out, our tools are designed to elevate your trading precision and confidence.</p>
                    <button>Know more</button>
                </div>
            </div>
            <div className="value_container">
                <h1 className='values-title'>Values we live by</h1>
                <div className="values-container">
                    <div className="value-container1">
                        <h1>01</h1>
                        <hr />
                        <h2>Data-Driven Integrity</h2>
                        <p>Every insight we provide is grounded in accurate, transparent, and objective data - no hype, just facts.</p>
                    </div>
                    <div className="value-container2">
                        <h1>02</h1>
                        <hr />
                        <h2>Market Clarity</h2>
                        <p>We simplify complex Open Interest and derivatives data into clear, actionable in-telligence that empowers traders at all levels.</p>
                    </div>
                    <div className="value-container3">
                        <h1>03</h1>
                        <hr />
                        <h2>Innovation in Analysis</h2>
                        <p>We continuously refine our proprietary models to stay ahead of market behavior, delivering cutting-edge tools for modern traing.</p>
                    </div>
                    <div className="value-container4">
                        <h1>04</h1>
                        <hr />
                        <h2>Client-Centric Approach</h2>
                        <p>Our users' success is our priority - we build solutions that genuinely help traders make smarter, more confident decisions.</p>
                    </div>
                    <div className="value-container5">
                        <h1>05</h1>
                        <hr />
                        <h2>Education & Empowerment</h2>
                        <p>We believe informed traders are successful traders. Through our tools and training, we aim to educate and elevate our community.</p>
                    </div>
                    <div className="value-container6">
                        <h1>06</h1>
                        <hr />
                        <h2>Discipline & Precision</h2>
                        <p>We promote a structured, strategic trading mindset by providing defined entry, exit, and stop-loss zones that eliminate emotional decision-making.</p>
                    </div>
                </div>
            </div>
            <TradingBrokers></TradingBrokers>
            <div className="disclosures-box">
                <h1>Risk Disclosure</h1>
                <p>Investment in securities market is subject to market risks. Read all related documents carefully before investing. Investments in equity, derivatives, and other securities are inherently subject to market fluctuations and other risks such as interest rate risk, liquidity risk, credit risk, and economic risk. Prices may rise or fall depending on var-ious domestic and international factors beyond control. There is no assurance or guarantee of returns on any investment. Past performance of securities, strategies, or recommendations is not indicative of future performance. The Research Analyst does not guarantee any profits or returns and shall not be held responsible for any losses incurred by users based on the research or opinions provided. Users are advised to consider their risk tolerance, financial situation, and investment objectives before acting on any recommendation. It is strongly recommended that users consult with a SEBI-registered investment adviser or their personal financial advisor before making any trading or investment decision.</p>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default About;