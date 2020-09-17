import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import './index.scss';

export default function Header() {
    return(
        <div className="header">
            <img src={logo} alt="DreamBroker logo" />
            <button>Sign me up!</button>
        </div>
    );
}