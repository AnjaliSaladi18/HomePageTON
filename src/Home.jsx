import { React, useRef } from 'react'
import './Home.css';
import TrainingCards from './components/TrainingCards/TrainingCards.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Home = () => {
  return (
    <section className='Home' id='Home'>
      <div className='header__container'>
        <div className="logo__container">
          <img src="/images/logo.png" alt="TONLOGO" className='header__logo' />
        </div>
        <div className="menu__container">
          <a href="#">Training Room</a>
          <a href="#">Platforms</a>
          <a href="#">Subscriptions</a>
          <a href="#">Tools & Data</a>
          <a href="#">Franchise</a>
          <a href="#">Contact</a>
        </div>
      </div>
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
      <div className="brokers__container">
        <div className="brokers__content">
          <h1>Start Trading with Expert Brokers</h1>
          <p>Trade directly on the supercharts through our supported, fully-verified and user-reviewed brokers.</p>
          <h6>Tradable assets</h6>
          <div className="assets__container">
            Stocks<span class="dot">·</span>
            Forex<span class="dot">·</span>
            Futures<span class="dot">·</span>
            Options
          </div>
        </div>
        <div className="brokers__image">
          <img src="/images/assets image.jpg" alt="" className='curved-image'/>
        </div>
      </div>
      <div className="disclosures__container">
        <h1>Sebi Disclosures</h1>
        <p>SEBI (Securities and Exchange Board of India) disclosures are mandatory information-sharing practices required from listed companies, market intermediaries, mutual funds, and other regulated entities. These disclosures aim to ensure transparency, protect investors, and maintain trust in the Indian securities market. For listed compa-nies, disclosures are governed by SEBI's Listing Obligations and Disclosure Requirements (LODR) Regulations, 2015. These include regular filings like quarterly financial results, annual reports, shareholding patterns, and corporate governance reports. Companies must also disclose significant events such as mergers, acquisitions, or leadership changes.</p>

        <p>Promoters and shareholders are required to disclose changes in shareholding under SEBI's Substantial Acquisition of Shares and Takeovers (SAST) Regulations. Addi tionally, under SEBI's Insider Trading Regulations, insiders must report trades and avoid dealing in sensitive information without public disclosure. Mutual funds must disclose portfolio holdings monthly, along with scheme performance, expense ratios, and voting actions. These disclosures help investors evaluate the fund's strategy. performance, and compliance.</p>

        <p>Market intermediaries such as brokers and asset managers need to provide information about their financials, complaint records, regulatory actions, and capital adequa cy. This enhances investor trust and regulatory oversight. Top 1000 listed companies must also publish Business Responsibility and Sustainability Reports (BRSR). These ESG-related disclosures promote responsible business practices by highlighting a company's impact on the environment, society, and governance. SEBI also oper ates the SCORES platform to address investor grievances. It allows the public to view how companies and intermediaries handle complaints and regulatory issues, fur ther promoting accountability. Let me know if you'd like this in a document format or tailored to a specific company or industry.</p>
      </div>
      <div className="footer">
        <div className="footer__image">
          <img src="/images/Footer Background.jpg" alt="FOOTER" />
          <div className="app-container">
            <p>Download App</p>
            <div className="app__image__container">
              <img src="/images/play store.png" alt="GOOGLEPLAY" />
              <img src="/images/apple logo.png" alt="APPLESTORE" />
            </div>
          </div>
        </div>
        <div className="footer__content">
          <h1>Making trading accessible for everyone</h1>
          <p>Making the financial markets accessible and inclusive for all individuals, regardless of their background or experience. With the rise of user-friendly trading platforms, mobile apps, and online education, more people can now participate in buying and selling stocks, mutual funds, and other securities.</p>
          <div className="button__container">
            <img src="/images/Fire Button.png" alt="FireButton" />
            <p>TRY IT NOW   <i class="fas fa-arrow-right"></i> </p>
          </div>
        </div>
        <div className="footer__container">
          <div className="footer-subcontainer1">
            <div className="footer-logo">
              <img src="/images/TON Logo White.png" alt="TONLOGO" />
            </div>
            <div className="footer-icons">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-reddit"></i>
            </div>
            <div className="language-box">
              <i class="fi fi-rr-globe"></i>
              <select name="language" id="language">
                <option value="en">English</option>
              </select>
            </div>
            <div className="footer-copyright">
              <p>Select market data provided by
                <a href="#"> ICE Data services</a>
              </p>
              <p>Select reference data provided by FactSet. Copyright &copy; 2025 FactSet Research Systems Inc.</p>
              <p>&copy; 2025 Trade on Numbers, Inc.</p>
            </div>
          </div>
          <div className="footer-subcontainer2">
            <div className="footer-subcontainer21">
              <div className="aboutcompany-container">
                <p className="heading">About Company</p>
                <p>Who are we</p>
                <p>Sebi Disclousures</p>
                <p>Overview</p>
                <p>Media & News</p>
              </div>
              <div className="knowledgehub-container">
                <p className="heading">Knowledge Hub</p>
                <p>Training Room</p>
                <p>Historical Data</p>
                <p>DII/FII Analytics</p>
                <p>FAQ's</p>
              </div>
            </div>
            <div className="footer-subcontainer22">
              <div className="opportunity-container">
                <p className="heading">Opportunity</p>
                <p>Refer</p>
                <p>Partner with us</p>
                <p>Careers</p>
              </div>
              <div className="disclamiers-container">
                <p className="heading">Disclamiers</p>
                <p>Cookies Concern</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Accessibility Statement</p>
              </div>
            </div>
            <div className="footer-subcontainer23">
              <div className="support-container">
                <p className="heading">Support</p>
                <p>Help</p>
                <p>Testimonials</p>
                <p>Case Studies</p>
                <p>Blog</p>
                <p>Refunds</p>
                <p>Cancellations</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Home;