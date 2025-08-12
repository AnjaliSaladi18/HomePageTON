import { React, useRef, useState } from 'react'
import './Home.css';
import Header from './components/TrainingCards/Header.jsx';
import TrainingCards from './components/TrainingCards/TrainingCards.jsx';
import TradingBrokers from './components/TrainingCards/TradingBrokers.jsx';
import Footer from './components/TrainingCards/Footer.jsx';
import CookiesPopup from './Pages/CookiesPopup.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CookiesPolicy from './Pages/CookiesPolicy.jsx';
const Home = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const handleLearnMore = () => {
    setShowPolicy(true);
  };
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
          <img src="/images/Home image.png" alt="HOMEIMAGE" />
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
        <p>The Securities and Exchange Board of India (SEBI), as the market regulator, mandates various disclosures from listed companies, market intermediaries, mutual funds, and other regulated entities to ensure transparency, protect investors, and maintain confidence in India’s securities market. These disclosure requirements are designed to give all market participants equal access to relevant information, thereby reducing the scope for misinformation, insider advantage, or market manipulation. <br /> <br />

          For listed companies, disclosure obligations are primarily governed by the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (LODR). These require periodic reporting such as quarterly financial results, annual reports, shareholding patterns, and corporate governance statements. Additionally, companies must promptly report significant developments like mergers, acquisitions, leadership changes, bonus issues, or litigation matters. Such event-based disclosures must be communicated to the stock exchanges before or simultaneously with any public announcement, ensuring investors are not caught unaware by material changes in the company’s position. <br /> <br />

          Promoters and significant shareholders have their own set of obligations under the SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011 (SAST). Any acquisition or disposal of shares beyond certain thresholds must be reported, and acquisitions exceeding 25% of shareholding trigger an open offer requirement for public shareholders. Similarly, under the SEBI (Prohibition of Insider Trading) Regulations, 2015, company insiders — such as directors, employees, or connected persons — must disclose their trades and are prohibited from dealing in securities based on unpublished price-sensitive information (UPSI). Companies also enforce trading window closures before major announcements to prevent misuse of confidential information.<br /> <br />

          Mutual funds are subject to detailed transparency rules as well. They must disclose their portfolio holdings on a monthly basis, provide daily updates on Net Asset Values (NAVs), publish expense ratios, and reveal their voting patterns on shareholder resolutions. These measures help investors assess the fund’s investment strategy, costs, and alignment with their stated objectives.<br /> <br />

          Market intermediaries such as brokers, portfolio managers, and asset management companies also have disclosure responsibilities. They must publish financial statements, maintain and report complaint records, disclose any regulatory actions taken against them, and prove compliance with capital adequacy requirements. These disclosures strengthen investor trust and allow regulators to maintain oversight over market operations.<br /> <br />

          Beyond financial reporting, SEBI also emphasizes non-financial disclosures. The top 1000 listed companies by market capitalization must file a Business Responsibility and Sustainability Report (BRSR) annually, covering environmental, social, and governance (ESG) practices. These reports highlight a company’s carbon footprint, waste management policies, employee welfare measures, diversity initiatives, and ethical governance systems, thereby promoting responsible corporate behavior.<br /> <br />

          Investor protection is further reinforced through SEBI’s SCORES (SEBI Complaints Redress System) platform. This online portal allows investors to file complaints against companies, mutual funds, or intermediaries and track their resolution. SCORES also makes public how entities respond to complaints, which adds a layer of accountability and encourages better compliance.<br /> <br />

          Overall, SEBI’s disclosure framework ensures that critical information flows promptly and fairly to all stakeholders. For investors, it enables informed decision-making; for companies, it builds credibility and reduces legal risks; and for the market as a whole, it promotes efficiency, reduces speculation, and deters malpractice.</p>
      </div>
      <Footer></Footer>
      <CookiesPopup onLearnMore={handleLearnMore} />
      {showPolicy && (
        <CookiesPolicy
          onSave={() => setShowPolicy(false)}
          onClose={() => setShowPolicy(false)}
        />
      )}
    </section >
  )
}

export default Home;