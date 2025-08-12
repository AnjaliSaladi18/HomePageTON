import React, { useState } from 'react';
import './CookiesPolicy.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function CookiesPolicy({ onClose,onSave }) {
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    return (
        <div className="cookies-overlay">
            <div className="cookies-policy-container">
                <div className="cookies-policy-heading">
                    <div className="heading-content">
                        <h1>Cookies Policy</h1>
                        <p>TradeOnNumbers uses cookies to improve your interaction with our platform and services.</p>
                    </div>
                    <div className="cookies-img">
                        <img src="/images/Cookies.png" alt="COOKIES" />
                    </div>
                </div>
                <div className="policy-group">
                    <PolicyRow
                        title="What Are Cookies?"
                        description="Cookies are small text files stored on your device by your browser when you visit a website. They help recognize your device and store certain information to make your experience"
                        checked={toggle1}
                        onChange={() => setToggle1(!toggle1)}
                    />
                    <PolicyRow
                        title="Why We Use Cookies?"
                        description={
                            <>
                                <p className='list-heading'>We may use cookies to:</p>
                                <ul>
                                    <li>Enhance your overall browsing experience.</li>
                                    <li>Remember your preferences and settings.</li>
                                    <li>Improve website performance and load times.</li>
                                    <li>Analyze usage and interaction patterns to improve services.</li>
                                </ul>
                            </>
                        }
                        checked={toggle2}
                        onChange={() => setToggle2(!toggle2)}
                    />
                    <PolicyRow
                        title="Managing Cookies"
                        description={
                            <>
                                <p>You can choose to disable cookies through your browser settings. However, please note that disabling cookies may impact the functionality and performance of certain features on the TradeOnNumbers platform.</p> <br />
                                <p>For more detailed information, please refer to your browser's help section.</p>
                            </>
                        }
                        checked={toggle3}
                        onChange={() => setToggle3(!toggle3)}
                    />
                </div>
                <div className="cookies-policy-buttons">
                    <button className="save" onClick={onSave}>Save</button>
                    <button className="close" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
    function PolicyRow({ title, description, checked, onChange }) {
        return (
            <div className="policy-cookies">
                <div className="policy-row">
                    <div className="policy-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <ToggleSwitch checked={checked} onChange={onChange} />
                </div>
            </div>
        )
    }
    function ToggleSwitch({ checked, onChange }) {
        return (
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={onChange} />
                <span className="slider">
                    <span className="knob">
                        {checked ? <i className="fas fa-check"></i> : <i className="fas fa-minus"></i>}
                    </span>
                </span>
            </label>
        )
    }
}


export default CookiesPolicy;
