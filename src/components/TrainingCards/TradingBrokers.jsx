import React from 'react'
import './TradingBrokers.css'
function TradingBrokers() {
  return (
    <div className="brokers__container">
        <div className="brokers__content">
          <h1>Start Trading with Expert Brokers</h1>
          <p>Trade directly on the supercharts through our supported, fully-verified and user-reviewed brokers.</p>
          <h6>Tradable assets</h6>
          <div className="assets__container">
            Stocks<span className="dot">·</span>
            Forex<span className="dot">·</span>
            Futures<span className="dot">·</span>
            Options
          </div>
        </div>
        <div className="brokers__image">
          <img src="/images/assets image.jpg" alt="" className='curved-image'/>
        </div>
     </div>
  )
}

export default TradingBrokers;