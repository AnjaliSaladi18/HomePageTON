import React from "react";
import './TermsofUse.css'
import Header from "../components/TrainingCards/Header";
import Footer from "../components/TrainingCards/Footer";
function TermsofUse() {
    return (
        <>
            <Header></Header>
            <div className="termsofuse-container">
                <h1>Terms Of Use</h1>
                <img src="/images/T & C.png" alt="TERMSOFUSE" />
            </div>
            <div className="introduction-container">
                <div className="termsofuse-title-container">
                    <h1>Introduction</h1>
                </div>
                <div className="termsofuse-content-container">
                    <p className="termsofuse-description">
                        <b>Trade on Numbers (ToN)</b> is a specialized trading research and analysis platform designed to provide insights through technical analysis, proprietary algorithms, and open interest data. Access to and use of Trade on Numbers and all its digital properties are subject to the Terms of Use outlined below.
                    </p>
                </div>
            </div>
            <div className="terms-container">
                <div className="termsofuse-title-container">
                    <h1>Accepting Terms</h1>
                </div>
                <div className="termsofuse-content-container">
                    <p className="termsofuse-description"><b>Trade on Numbers</b> is a product of <b>[Your Legal Entity Name, Srivas Analytical India Private Limited]</b> (referred to as "ToN" or "we/us/our" hereafter).</p>
                    <ul className='termsofuse-description-list'>
                        <li>To access or use the Services, you must first agree to these Terms of Use.</li>
                        <li>You accept the Terms by:
                            <ul className="sublist">
                                <li>Clicking to agree or accept where this option is made available, or</li>
                                <li>Using any part of the Trade on Numbers website, mobile application, or integrated broker services.</li>
                            </ul>
                        </li>
                        <li>If you do not agree with the Terms, you may not access or use our Services.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tonservices-container">
                <div className="termsofuse-title-container">
                    <h1>Provision of Services by ToN</h1>
                </div>
                <div className="termsofuse-content-container">
                    <ul className='termsofuse-description-list'>
                        <li>ToN is continually innovating and evolving to offer the best trading research experience.You acknowledge that the nature and features of our Services may change from time to time without prior notice.</li>
                        <li>You agree that ToN may suspend or permanently discontinue any aspect of the Services at our sole discretion and without notice.</li>
                        <li>You may stop using the Services at any time. No formal notification is required.</li>
                        <li>You acknowledge that if ToN disables or suspends your account, you may lose access to your content, historical data, or other elements associated with your account.</li>
                        <li>You agree that while. ToN may not currently impose limitations on data usage or transmissions, we reserve the right to set such limits at any time, at our sole discretion.</li>
                    </ul>
                </div>
            </div>
            <div className="useofservices-container">
                <div className="termsofuse-title-container">
                    <h1>Use of The Services by You</h1>
                </div>
                <div className="termsofuse-content-container">
                    <ul className='termsofuse-description-list'>
                        <li>To access certain features, you must provide accurate, complete, and up-to-date personal information. You are responsible for maintaining the accuracy of this information at all times.</li>
                        <li> You agree to use our Services only for purposes that are lawful and in accordance with:
                            <ul className="sublist">
                                <li>These Terms</li>
                                <li>Any applicable laws, rules, or regulations in your jurisdiction</li>
                            </ul>
                        </li>
                        <li>You agree not to access (or attempt to access) the Services through automated means (e.g.. bots, scripts, crawlers), unless explicitly permitted via a separate written agreement</li>
                        <li>You shall not disrupt or interfere with the Services or the networks and systems connected to them.</li>
                        <li>Unless explicitly permitted, you shall not reproduce, copy, sell, trade, or resell the Services or any part thereof.
                        </li>
                    </ul>
                    <p className="termsofuse-description">
                        You are solely responsible for your actions and for any consequences resulting from a breach of these Terns, including any loss or damage caused to ToN or third parties.
                    </p>
                </div>
            </div>
            <div className="termsofuse-risk-disclosures-container">
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
export default TermsofUse;