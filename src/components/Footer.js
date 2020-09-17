import React, { useState, useEffect } from "react";
import logo_bw from "./images/logo_bw.webp";

export default function Footer() {
    return(
        <div className="footer">
            <img src={logo_bw} alt="DreamBrokerlogo" />
            <p>Dream Broker is a Finnish online video software company. We help our customers revolutionise their communication and learning with online video. Our mission is to help people and enterprises communicate, collaborate and learn with online video. Anywhere, anytime and on any device.</p>
            <p>Contact us</p>
            <p>Director, Business Development</p>
            <p>Samuli Ruuskanen</p>
            <p>samuli.ruuskanen@dreambroker.fi</p>
            <p>+358 40 717 9763</p>
            <hr></hr>
            <p>© Dream Broker Oy, 2020. All rights reserved.</p>
            
        </div>
    );
}