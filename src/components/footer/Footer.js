import React, { useState, useEffect } from "react";
import logo_bw from "../images/logo_bw.webp";
import './index.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <img src={logo_bw} alt="DreamBrokerlogo" />
                <p>Dream Broker is a Finnish online video software company. We help our customers revolutionise their communication and learning with online video. Our mission is to help people and enterprises communicate, collaborate and learn with online video. Anywhere, anytime and on any device.</p>
                <div className="contactUs">
                    <h5>Contact us</h5>
                    <p>Director, Business Development</p>
                    <p className="name">Samuli Ruuskanen</p>
                    <p className="email">samuli.ruuskanen@dreambroker.fi</p>
                    <p>+358 40 717 9763</p>
                </div>
                <hr></hr>
                <p className="copyright">© Dream Broker Oy, 2020. All rights reserved.</p>

            </div>

        </div>
    );
}