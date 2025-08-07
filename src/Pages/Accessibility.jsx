import React from "react";
import Header from "../components/TrainingCards/Header";
import Footer from "../components/TrainingCards/Footer";
import './Accessibility.css'
function Accessibility() {
    return (
        <>
            <Header></Header>
            <div className="accessibility-container">
                <h1>Accessibility Statement</h1>
                <img src="/images/Ellipse 1.png" alt="ACCESSIBILITY" />
            </div>
            <div className="commitment-container">
                <div className="accessibility-title-container">
                    <h1>Our Commitment to Accessibility</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-description">
                        At <b>TradeOnNumbers</b>, we are committed to building a platform that is inclusive and accessible to all users, regardless of their abilities, backgrounds, or access needs. We recognize the importance of creating a digital environment where every trader, analyst, and investor can access and engage with our tools and insights without barriers. <br /> <br />
                        We understand that our platform is data-rich and technically advanced, and ensuring full accessibility is an ongoing process. Our design and development approach is guided by top standards with a goal of meeting <b>Level AA success criteria.</b> These principles help ensure our content is <b>perceivable, operable, understandable and robust</b> for every user.
                    </p>
                </div>
            </div>
            <div className="improvements-container">
                <div className="accessibility-title-container">
                    <h1>Our Ongoing Improvements</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-title">Regular Testing & Evaluation</p>
                    <p className="accessibility-description">We conduct routine evaluations using a combination of automated tools and manual testing to assess accessibility. These evaluations help us proactively identify and address usability issues for users with disabilities</p>
                </div>
            </div>
            <div className="feedback-container">
                <div className="accessibility-title-container">
                    <h1>User Feedback</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-description">
                        We welcome feedback from all our users, especially those with accessibility needs. Your input plays a critical role in helping us understand challenges and improve the platform accordingly.
                    </p>
                </div>
            </div>
            <div className="features-container">
                <div className="accessibility-title-container">
                    <h1>Accessibility Featurs</h1>
                </div>
                <div className="accessibility-content-container">
                    <ul className='accessibility-description-list'>
                        <li><b>Keyboard Navigation:</b> Our website supports full keyboard navigation for key interface elements.</li>
                        <li><span><b>Screen Reader Compatibility: </b>We ensure compatibility with popular screen readers to provide meaningful access to visual data in an audio format.</span></li>
                        <li><b>Alternative Text:</b> Images and icons include alternative text for better context and clarity.</li>
                        <li><b>Focus Indicators:</b> We maintain visible focus states across elements to aid users navigating via keyboard.</li>
                    </ul>
                </div>
            </div>
            <div className="awareness-container">
                <div className="accessibility-title-container">
                    <h1>Training & Awarenss</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-description">
                        Our development and design teams are trained on accessibility best practices. Accessibility is considered a core part of our design process to ensure new features are built with inclusion in mind.
                    </p>
                </div>
            </div>
            <div className="platform-specific-container">
                <div className="accessibility-title-container">
                    <h1>Platfrom-Specific Accessibility</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-title">Website (www.tradeonnumbers.com)</p>
                    <p className="accessibility-description">We are working toward top performance for our website. Features include:</p>
                    <ul className='accessibility-description-list'>
                        <li>"Skip to Content" functionality for faster navigation.</li>
                        <li>Responsive layout and structured heading tags for screen reader clarity.</li>
                        <li>Color contrast optimization across light and dark modes</li>
                    </ul>
                </div>
            </div>
            <div className="analysis-container">
                <div className="accessibility-title-container">
                    <h1>Charts & Analysis Tools</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-description">As our charts are heavily interactive, we are prioritizing:</p>
                    <ul className='accessibility-description-list'>
                        <li>Accessibility for analytical tools and navigation elements.</li>
                        <li>Improved color contrast and theme flexibility for better readability.</li>
                        <li>Enhanced focus indicators for real-time analysis interaction.</li>
                        <li>Ongoing compatibility improvements with screen readers.</li>
                    </ul>
                </div>
            </div>
            <div className="contactus-container">
                <div className="accessibility-title-container">
                    <h1>Contact Us for Feedback</h1>
                </div>
                <div className="accessibility-content-container">
                    <p className="accessibility-description">
                        We view accessibility as a shared journey. If you experience any difficulty accessing content on our platform, or have suggestions for improvement, we encourage you to reach out: <br /> <br />

                        <b>Email:</b> support@tradeonnumbers.com <br />

                        (Please use this email for accessibility-related feedback only.) <br /><br />

                        At <b>TradeOnNumbers</b>, our mission is to make advanced market analysis tools usable and accessible to everyone. Thank you for being part of our commitment to a more inclusive trading ecosystem.
                    </p>
                </div>
            </div>
            <div className="accessibility-risk-disclosures-container">
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
export default Accessibility;
