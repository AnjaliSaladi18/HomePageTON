import React, { useEffect, useState } from 'react'
import './CookiesPopup.css'
function CookiesPopup({onLearnMore}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);
    const handleLearnMore = () => {
        setVisible(false);      
        if (onLearnMore) {
            onLearnMore();      
        }
    };
    if (!visible) return null;
    return (
        <>
            <div className="cookies-overlay">
                <div className="cookies-popup">
                    <div className="cookies-container">
                        <div className="cookies-heading">
                            <h2>Cookies</h2>
                        </div>
                        <div className="button-container">
                            <button className="accept" onClick={() => setVisible(false)}>Accept cookies</button>
                            <button className="learn-more" onClick={handleLearnMore}>Learn more</button>
                        </div>
                    </div>
                    <p className="highlight">We use cookies to enhance your experience.</p>
                    <p>
                        TradeOnNumbers uses cookies to personalize your browsing experience, store your preferences, and support seamless navigation.
                        <br />By continuing to use our website, you consent to our use of cookies. You can manage or disable them in your browser settings.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CookiesPopup;