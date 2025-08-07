import React from "react";
import './PrivacyPolicy.css'
import Header from "../components/TrainingCards/Header";
import Footer from "../components/TrainingCards/Footer";
function PrivacyPolicy() {
    return (
        <>
            <Header></Header>
            <div className="privacy-policy-container">
                <div className="privacy-policy-content">
                    <h1>Privacy Policy</h1>
                    <p> At <b>TradeOnNumbers</b> we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, mobile app, or services. </p>
                </div>
                <div className="privacy-policy-image">
                    <img src="/images/Layer 8.png" alt="PRIVACYPOLICY" />
                </div>
            </div>
            <div className="userconsent-container">
                <div className="privacy-policy-title-container">
                    <h1>User Consent</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        By using our website, mobile app, or services, and by submitting your personal information, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="information-container">
                <div className="privacy-policy-title-container">
                    <h1>Information You Provide to Us</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description"><b>We collect the personal information you voluntarily provide, including but not limited to:</b></p>
                    <ul className='privacy-policy-description-list'>
                        <li>Your name, phone number, email address, and age when you register or log in.</li>
                        <li>Information you include in feedback or emails sent to us.</li>
                        <li>Responses and opinions shared through surveys or forms</li>
                        <li>Any additional details you provide through our website, mobile app, or services when it is clearly indicated.</li>
                    </ul>
                </div>
            </div>
            <div className="information-colleted-container">
                <div className="privacy-policy-title-container">
                    <h1>Information Collected Automatically (via Technology)</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">To improve your experience on our platform, we may automatically collect certain information using cookies and tracking technologies, such as:</p>
                    <ul className='privacy-policy-description-list'>
                        <li>Browser type, device information, and operating system.</li>
                        <li>IP address and session data.</li>
                        <li>Usage behavior and interaction patterns with the site/app.</li>
                        <li>Analytics provided by third-party services to help us improve user experience.</li>
                    </ul>
                    <p className="privacy-policy-description end-desc">If you are logged into our platform, this data may be linked to your personal profile and treated as personal information</p>
                </div>
            </div>
            <div className="personal-information-container">
                <div className="privacy-policy-title-container">
                    <h1>Use of Personal Information</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">Your information may be used for the following purposes.</p>
                    <ul className='privacy-policy-description-list'>
                        <li>To create and manage your account securely.</li>
                        <li>To identify and authenticate you as a user.</li>
                        <li>To improve the functionality and user experience of our platform.</li>
                        <li>To provide the services or features you request.</li>
                        <li>To send important transactional communications (e.g., alerts, notifications).</li>
                        <li>To share promotional content, offers, newsletters, and surveys (only with your consent).</li>
                    </ul>
                </div>
            </div>
            <div className="anonymous-info-container">
                <div className="privacy-policy-title-container">
                    <h1>Anonymous Information</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        We may anonymize personal data to remove identifying information and use this non-personal data for analytical and business improvement purposes. TradeOnNumbers reserves the right to use and share anonymized data without restriction.
                    </p>
                </div>
            </div>
            <div className="thirdparty-websites-container">
                <div className="privacy-policy-title-container">
                    <h1>Third-Party Websites</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        Our website or app may contain links to third-party websites. Clicking on these links will take you out-side our platform. We are not responsible for the privacy practices or content of such external sites. This Privacy Policy applies only to data collected by TradeOnNumbers.
                    </p>
                </div>
            </div>
            <div className="datasecurity-container">
                <div className="privacy-policy-title-container">
                    <h1>Data Security</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        We take data security seriously and employ industry-standard practices to protect your personal infor-mation from unauthorized access, misuse, or disclosure. However, no internet-based service can be 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                </div>
            </div>
            <div className="policy-container">
                <div className="privacy-policy-title-container">
                    <h1>Changes to This Policy</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We recommend reviewing this policy periodically.
                    </p>
                </div>
            </div>
            <div className="contact-info-container">
                <div className="privacy-policy-title-container">
                    <h1>Contact Information</h1>
                </div>
                <div className="privacy-policy-content-container">
                    <p className="privacy-policy-description">
                        If you have any questions or concems regarding this Privacy Policy, or how your information is handled, you may contact us at: <br />
                        <b>connect@tradeonnumbers.com <br /> <br />
                        800 800 1835</b>
                    </p>
                </div>
            </div>
            <div className="privacy-policy-risk-disclosures-container">
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
export default PrivacyPolicy;