import React, { useState, useEffect, useRef } from 'react'
import './Terminal.css'
import { FaSearch, FaCheck, FaCog } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceArea
} from "recharts";

function Terminal() {
    const [selectedValue, setSelectedValue] = useState('NIFTY');
    const [showPopup, setShowPopup] = useState(false);
    const [isTypingMode, setIsTypingMode] = useState(false);
    const options = ['NIFTY', 'BANKNIFTY', 'FINNIFTY', 'SENSEX'];
    const popupRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedValue(option);
        setIsTypingMode(false);
        setShowPopup(false);
    };

    const handleSearchBarClick = (e) => {
        e.stopPropagation();
        if (showPopup) {
            setShowPopup(false);
            setIsTypingMode(false);
        } else {
            setIsTypingMode(true);
            setShowPopup(true);
        }
    };
    useEffect(() => {
        function handleClickOutside(e) {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowPopup(false);
                setIsTypingMode(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    const handleGraphClick = (e) => {
        e.stopPropagation(true);
    }
    const handleInfoClick = (e) => {
        e.stopPropagation(true);
    }
    const handleSettings = () => {

    }

    const tableData = [
        { time: "12:30", series1: 25, series2: 1.0 },
        { time: "12:35", series1: 60, series2: 1.1 },
        { time: "12:40", series1: 62, series2: 1.2 },
        { time: "12:45", series1: 58, series2: 1.15 },
        { time: "12:50", series1: 64, series2: 1.25 },
        { time: "12:55", series1: 61, series2: 1.18 },
        { time: "13:00", series1: 63, series2: 1.2 },
        { time: "13:05", series1: 65, series2: 1.22 },
        { time: "13:10", series1: 62, series2: 1.19 },
        { time: "13:15", series1: 66, series2: 1.25 },
        { time: "13:20", series1: 63, series2: 1.22 },
        { time: "13:25", series1: 67, series2: 1.28 },
        { time: "13:30", series1: 61, series2: 1.2 },
        { time: "13:35", series1: 65, series2: 1.25 },
        { time: "13:40", series1: 69, series2: 1.3 },
        { time: "13:45", series1: 64, series2: 1.22 },
        { time: "13:50", series1: 66, series2: 1.26 },
        { time: "13:55", series1: 63, series2: 1.2 },
    ];

    return (
        <>
            <div className="terminal-container">
                <div className="terminal-header-container">
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
                <div className="terminal-hero" style={{ backgroundColor: '#edebebff', width: '100%', height: '92vh', display: 'flex', padding: '5px 120px', gap: '5px' }}>
                    <div className="terminal-container1" style={{ width: '35%', height: '90vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="terminal-search-settings" style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                            <div className="terminal-search-container" onClick={handleSearchBarClick} style={{
                                backgroundColor: 'white', padding: '3px 13px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer'
                                , position: 'relative', width: '74.5%', height: '6vh', alignItems: 'center'
                            }}>
                                <div className="terminal-search-content" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                    <FaSearch style={{ fontSize: '12px', marginTop: '2px', color: '#666' }} />
                                    {isTypingMode ? (
                                        <span style={{ fontSize: '11px', color: '#666', padding: '5px' }}>
                                            Type Stock Name: TCS, SBIN etc.
                                        </span>
                                    ) : (
                                        <span style={{ fontSize: '12px' }}>
                                            {selectedValue}
                                        </span>
                                    )}
                                    {!isTypingMode && (
                                        <>
                                            <span className="stock-value" style={{ fontWeight: 'bold', fontSize: '12px' }}>25195.80</span>
                                            <span className="stock-change" style={{ color: 'green', fontSize: '12px' }}>+0.5%</span>
                                        </>
                                    )}
                                </div>
                                {!isTypingMode && (
                                    <div className="terminal-search-actions">
                                        <button onClick={handleGraphClick} style={{ color: 'blue', border: '1px solid blue', padding: '0px 6px', backgroundColor: 'inherit', borderRadius: '3px', fontSize: '10px', marginRight: '8px', cursor: 'pointer', marginBottom: '4px' }}>
                                            <i class="fas fa-chart-line"></i>
                                        </button>
                                        <button onClick={handleInfoClick} style={{ color: 'blue', border: '1px solid blue', padding: '0px 4px', backgroundColor: 'inherit', borderRadius: '3px', cursor: 'pointer', fontSize: '10px' }}>
                                            Info
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="terminal-settings-container" onClick={handleSettings} style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '24.5%', backgroundColor: 'white', justifyContent: 'center', borderRadius: '5px', cursor: 'pointer', height: '6vh' }}>
                                <FiSettings style={{ fontSize: '12.5px', marginTop: '1px' }} />
                                <p style={{ fontSize: '13px' }}>Settings</p>
                            </div>
                        </div>
                        {showPopup && (
                            <div className="terminal-popup" ref={popupRef}>
                                {options.map((option) => (
                                    <div
                                        key={option}
                                        className={`popup-item ${selectedValue === option ? "selected" : ""}`}
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option}
                                        {selectedValue === option && <FaCheck />}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="terminal-table-container" style={{ backgroundColor: 'white', position: 'relative', height: '83.2vh', borderRadius: '5px', padding: '13px', overflowY: 'scroll' }}>
                            <h4>TON Index</h4>
                            <table style={{ borderCollapse: 'collapse', margin: '14px 0', width: '100%', textAlign: 'center' }} className='terminal-table'>
                                <thead style={{ backgroundColor: '#efeeeeff' }}>
                                    <tr>
                                        <th>Strike Price</th>
                                        <th>Wave%</th>
                                        <th>Ratio</th>
                                        <th>Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td></td>
                                        <td></td>
                                        <td>Ratio</td>
                                        <td>Trend</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#4A5568', backgroundColor: '#e6f0fa', padding: '3px 5px', borderRadius: '5px' }}>-10%</span></td>
                                        <td>0.63</td>
                                        <td><span style={{ color: '#4A5568', backgroundColor: '#e6f0fa', padding: '3px 5px', borderRadius: '5px' }}>Neutral</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+40%</span></td>
                                        <td>5.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>-80%</span></td>
                                        <td>0.20</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>Bearish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td ><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+60%</span></td>
                                        <td>7.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>-50%</span></td>
                                        <td>0.40</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>Bearish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+40%</span></td>
                                        <td>5.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>-80%</span></td>
                                        <td>0.20</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>Bearish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+60%</span></td>
                                        <td>7.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>-50%</span></td>
                                        <td>0.40</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>Bearish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+40%</span></td>
                                        <td>5.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>-80%</span></td>
                                        <td>0.20</td>
                                        <td><span style={{ color: '#DC2626', backgroundColor: '#fdecec', padding: '3px 5px', borderRadius: '5px' }}>Bearish</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #efeeeeff', fontSize: '13px' }}>
                                        <td>24900</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>+60%</span></td>
                                        <td>7.50</td>
                                        <td><span style={{ color: '#22C55E', backgroundColor: '#ecfdf5', padding: '3px 5px', borderRadius: '5px' }}>Bullish</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="terminal-container2" style={{ width: '65%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="ton-wave-container" style={{ backgroundColor: 'white', width: '100%', height: '44.6vh', borderRadius: '5px', fontSize: '9px', padding: '12px 10px 0 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: '#efeeeeff', borderRadius: '5px', padding: '5px 15px' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <h4 style={{ fontSize: '11px', marginTop: '2px' }}>TON Wave Analytics</h4>
                                    <div className="terminal-search-content" style={{ display: 'flex', gap: '5px', alignItems: 'center', border: '1px solid #666', borderRadius: '5px', padding: '0 10px' }}>
                                        <FaSearch style={{ fontSize: '10px', marginTop: '2px', color: '#666' }} />

                                        <span style={{ fontSize: '11px', color: '#666' }}>
                                            NIFTY
                                        </span>


                                        <span className="stock-value" style={{ fontWeight: 'bold', fontSize: '10px' }}>25195.80</span>
                                        <span className="stock-change" style={{ color: 'green', fontSize: '10px' }}>+0.5%</span>


                                    </div>
                                    <div className="dates-dropdown">
                                        <select name="dates" id="" style={{ fontSize: '10px', backgroundColor: 'inherit', padding: '2px 0', borderRadius: '5px' }}>
                                            <option value="">18 AUG</option>
                                            <option value="">17 AUG</option>
                                            <option value="">16 AUG</option>
                                            <option value="">15 AUG</option>
                                            <option value="">14 AUG</option>
                                        </select>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                        <div style={{ width: 10, height: 10, background: "#f28b82", borderRadius: 3 }}></div>
                                        <span>Bearish</span>
                                    </div>

                                    {/* Bullish */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                        <div style={{ width: 10, height: 10, background: "#81c995", borderRadius: 3 }}></div>
                                        <span>Bullish</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                        <div
                                            style={{
                                                width: 24,
                                                height: 6,
                                                background: "linear-gradient(to right, red, green)",
                                                borderRadius: 5,
                                            }}
                                        ></div>
                                        <span>TON Wave</span>
                                    </div>


                                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                        <div style={{ width: 24, height: 6, background: "blue", borderRadius: 5 }}></div>
                                        <span>TON Ratio</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '40vh', width: '110%', maxWidth: "1050px", marginTop: '2%' }}>
                                <ResponsiveContainer style={{ width: '100%', height: '100%' }}>
                                    <LineChart data={tableData}>
                                        <CartesianGrid strokeDasharray="0 1" />

                                        <XAxis dataKey="time" tickLine={false} />
                                        <YAxis yAxisId="left" domain={[-90, 90]} ticks={[-90, -60, -30, 0, 30, 60, 90]} tickLine={false} />
                                        <YAxis yAxisId="right" orientation="right" domain={[0.4, 1.6]} tickLine={false} />

                                        <Tooltip />
                                        <defs>
                                            {/* Green gradient for top */}
                                            <linearGradient id="greenGradient" x1="0" y1="1" x2="0" y2="0">
                                                <stop offset="0%" stopColor="green" stopOpacity={0.09} />
                                                <stop offset="100%" stopColor="green" stopOpacity={0} />
                                            </linearGradient>


                                            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="red" stopOpacity={0.09} />
                                                <stop offset="100%" stopColor="red" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <ReferenceArea
                                            yAxisId="left"
                                            y1={30}
                                            y2={90}
                                            strokeOpacity={0}
                                            fill="url(#greenGradient)"
                                        />


                                        <ReferenceArea
                                            yAxisId="left"
                                            y1={-30}
                                            y2={-90}
                                            strokeOpacity={0}
                                            fill="url(#redGradient)"
                                        />


                                        <Line
                                            yAxisId="left"
                                            type="linear"
                                            dataKey="series1"
                                            stroke="#0077ff"
                                            dot={{ r: 2 }}
                                            strokeWidth={1}
                                        />

                                        <Line
                                            yAxisId="right"
                                            type="linear"
                                            dataKey="series2"
                                            stroke="#ff3333"
                                            dot={{ r: 2 }}
                                            strokeWidth={1}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="ton-stocks-container" style={{ backgroundColor: 'white', width: '100%', height: '44.6vh', borderRadius: '5px' }}>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Terminal;