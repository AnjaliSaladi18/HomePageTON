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
    </section>
  )
}

export default Home;