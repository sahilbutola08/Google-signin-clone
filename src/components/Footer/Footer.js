import './Footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="change-language">
                <select>
                    <option>English (United States)</option>
                    <option>Deutsch</option>
                    <option>Hindi</option>
                </select>
                <div className="quicklinks">
                    <a href="/">Help</a>
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;