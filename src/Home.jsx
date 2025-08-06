import { React, useRef } from 'react'
import './Home.css';
import Header from './components/TrainingCards/Header.jsx';
import TrainingCards from './components/TrainingCards/TrainingCards.jsx';
import TradingBrokers from './components/TrainingCards/TradingBrokers.jsx';
import Footer from './components/TrainingCards/Footer.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Home = () => {
  return (
    <section className='Home' id='Home'>
      <Header></Header>
      <div className="header__content__container">
        <div className="content__container">
          <h1>Powering Profits with Precision Research</h1>
          <p id='p1'>Empowering traders with data-driven insights and high-accuracy analysis.</p>
          <p id='p2'>DISCOVER</p>
          <div className="discover__container">
            <div className="discover__info">
              <p> For plans ask an expert </p>
              <i class="fas fa-arrow-right"></i>
            </div>
            <hr />
            <div className="discover__info">
              <p>For training connect to specialist</p>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="images__container">
          <img src="public/images/Home image.png" alt="HOMEIMAGE" />
        </div>
      </div>
      <div className="trainingsessions__container">
        <TrainingCards></TrainingCards>
      </div>
      <div className="insights__container">
        <p className='heading'>Navigating Volatility with Data-Driven Insights</p>
        <div className="insightscontent__container">
          <p>Empowering traders with data-driven insights and high-accuracy analysis.
            Turn uncertainty into confidence with our expert research and strategies
          </p>
          <button>Get Started</button>
        </div>
        <div className="insightsimages__container">
          <img src="/images/Add Poster.jpg" alt="SALESREPORT" />
          <div className="block1">
            <div className="sub_block">
              <div className="circle"></div>
              <h1>90x</h1>
            </div>
            <p className='p1'>More Accurate & Precise</p>
            <p className='p2'>Empowering traders with data-driven insights and high-accuracy analysis.
              Turn uncertainty into confidence with our expert research and strategies</p>
          </div>
          <div className="block2">
            <div class="traders__images">
              <img src="/images/t1.jpg" alt="TRADER1" />
              <img src="/images/t2.jpg" alt="TRADER2" />
              <img src="/images/t3.jpg" alt="TRADER3" />
            </div>
            <p>Used by 2,400+ Traders</p>
          </div>
        </div>
      </div>
      <div className="video__container">
        <div className="video">
          <video autoPlay loop muted playsInline>
            <source src="/images/trading-is-like-a-music.mp4" type="video/mp4" id="video" />
          </video>
        </div>
        <div class="video__content">
          <h6>Trading is like music</h6>
          <p>TIMING, RHYTHM, AND HARMONY TURN NOISE INTO A MASTERPIECE</p>
          <div class="icons__container">
            <img src="/images/logos.png" alt="LOGOS" />
          </div>
        </div>
      </div>
      <TradingBrokers></TradingBrokers>
      <div className="disclosures__container">
        <h1>Sebi Disclosures</h1>
        <p>SEBI (Securities and Exchange Board of India) disclosures are mandatory information-sharing practices required from listed companies, market intermediaries, mutual funds, and other regulated entities. These disclosures aim to ensure transparency, protect investors, and maintain trust in the Indian securities market. For listed compa-nies, disclosures are governed by SEBI's Listing Obligations and Disclosure Requirements (LODR) Regulations, 2015. These include regular filings like quarterly financial results, annual reports, shareholding patterns, and corporate governance reports. Companies must also disclose significant events such as mergers, acquisitions, or leadership changes.</p>

        <p>Promoters and shareholders are required to disclose changes in shareholding under SEBI's Substantial Acquisition of Shares and Takeovers (SAST) Regulations. Addi tionally, under SEBI's Insider Trading Regulations, insiders must report trades and avoid dealing in sensitive information without public disclosure. Mutual funds must disclose portfolio holdings monthly, along with scheme performance, expense ratios, and voting actions. These disclosures help investors evaluate the fund's strategy. performance, and compliance.</p>

        <p>Market intermediaries such as brokers and asset managers need to provide information about their financials, complaint records, regulatory actions, and capital adequa cy. This enhances investor trust and regulatory oversight. Top 1000 listed companies must also publish Business Responsibility and Sustainability Reports (BRSR). These ESG-related disclosures promote responsible business practices by highlighting a company's impact on the environment, society, and governance. SEBI also oper ates the SCORES platform to address investor grievances. It allows the public to view how companies and intermediaries handle complaints and regulatory issues, fur ther promoting accountability. Let me know if you'd like this in a document format or tailored to a specific company or industry.</p>
      </div>
      <Footer></Footer>
    </section >
  )
}

export default Home;