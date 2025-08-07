import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
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
                            <p className="heading">
                                <Link to={"/About"} style={{color:'inherit', textDecoration:'none'}}>About Company</Link>
                            </p>
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
                            <p className="heading">
                                <Link to="/Disclaimer" style={{ color: 'inherit', textDecoration: 'none' }}>Disclaimers</Link>
                            </p>
                            <p>Cookies Concern</p>
                            <p>
                                <Link to="/TermsofUse" style={{color:'inherit', textDecoration:'none'}}>Terms and Conditions</Link>
                            </p>
                            <p>
                                <Link to="/PrivacyPolicy" style={{color:'inherit', textDecoration:'none'}}>Privacy Policy</Link>
                            </p>
                            <p>
                                <Link to="/Accessibility" style={{color:'inherit', textDecoration:'none'}}>Accessibility Statement</Link>
                            </p>
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
    )
}

export default Footer