import React from 'react'
import Header from '../components/TrainingCards/Header';
import Footer from '../components/TrainingCards/Footer';
import './Disclaimer.css'
function Disclaimer() {
    return (
        <>
            <Header></Header>
            <div className="disclaimer-container">
                <div className="disclaimer-content">
                    <h1>Disclaimer</h1>
                    <p><b>TradeOnNumbers</b> is a NISM-registered Research Analyst under registration number <b>INHXXXXXXXXX.</b> This website and its contents are intended solely for informational and educational purposes. </p>
                </div>
                <div className="disclaimer-image">
                    <img src="/images/Layer 2.png" alt="DISCLAIMER" />
                </div>
            </div>
            <div className="warning-container">
                <div className="title-container">
                    <h1>General Risk Warning</h1>
                </div>
                <div className="content-container">
                    <p className="title">Investments in the securities market are subject to market risks. Read all related documents carefully before investing.</p>
                    <p className="description">Trading and investing in equities, derivatives, and other financial instruments involve substantial risk. There can be no assurance that any investment strategy or recommendation will be successful or achieve the intended objectives. Past performance is <b>not a reliable indicator</b> of future results.</p>
                </div>
            </div>
            <div className="disclosure-container">
                <div className="title-container">
                    <h1>Research Analyst Disclosure</h1>
                </div>
                <div className="content-container">
                    <p className="title">As required under NISM (Research Analyst) Regulations, 2014</p>
                    <div className="description">
                        <ul className='description-list'>
                            <li><span>The research and analysis provided here is purely based on the author's understanding of the market and technical data such as open interest, price patterns, and volume behavior.</span></li>
                            <li><span>The author/Research Analyst and associates do <b>not have any financial interest or beneficial ownership</b> in the securities recommended.</span></li>
                            <li>No compensation is received from any company whose securities are analyzed or recommended here.</li>
                            <li>The Research Analyst and its employees are not acting as an investment advisor and do not provide personalized investment advice.</li>
                            <li>The information and views are subject to change without notice and may be inconsistent or contradictory to views expressed by others in the market.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="warranty-container">
                <div className="title-container">
                    <h1>No Guarantee or Warranty</h1>
                </div>
                <div className="content-container">
                    <p className="description">TradeOnNumbers and its owners make no representations or warranties, express or implied, about the accuracy, completeness, reliability, or suitability of the information provided. All data and insights are provided "as is" and for general reference only. <br /><br />We do <b>not guarantee returns</b> or profits from any trades executed based on our analysis or recommendations. Users must rely on their own judgment and consult with a registered financial adviser before acting on any information.
                    </p>
                </div>
            </div>
            <div className="fiduciary-container">
                <div className="title-container">
                    <h1>No Fiduciary Relationship</h1>
                </div>
                <div className="content-container">
                    <p className="description">Use of this website does not create any client-advisor or fiduciary relationship between you and Trade OnNumbers or the Research Analyst. Subscriptions, training, or consulting provided are not substitutes for personal financial planning.</p>
                </div>
            </div>
            <div className="grievance-container">
                <div className="title-container">
                    <h1>Grievance Redressal</h1>
                </div>
                <div className="content-container">
                    <p className="description">
                        If you have any grievances, feedback, or concerns, you may contact us at: <br /> <b>connect@tradeonnumbers.com</b> <br />
                        <b>800 800 1835</b> <br /> <br /> We aim to resolve all grievances within <b>30 days</b> as per SEBI guidelines.
                    </p>
                </div>
            </div>
            <div className="risk-disclosures-container">
                <h1>Risk Disclosure</h1>
                <p><b>Investment in securities market in subject to market risks. Read all related documents carefully before investing."</b><br /><br />Investments in equity, derivatives, and other securities are inherently subject to market fluctuations and other risks such as interest rate risk, liquidity risk, credit risk, and economic risk. Prices may rise or fall depending on various domestic and international factors beyond control. <br /><br />
                    There is <b>no assurance or guarantee of returns</b> on any investment. Past performance of securities, strategies, or recommendations is <b>not indicative of future performance.</b><br /><br />
                    The Research Analyst does not guarantee any profits or retums and shall not be held responsible for any losses incurred by users based on the research or opinions provided. Users are advised to consider their <b>risk tolerance, financial situation, and investment objectives</b> before acting on any recommendation.<br /><br />
                    It is strongly recommended that users consult with a <b>SEBI-registered investment adviser or their personal financial advisor</b> before making any trading or investment decision.</p>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Disclaimer;