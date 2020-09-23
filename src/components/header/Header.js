import React from "react";
import logo from "../images/logo.png";
import './index.scss';

export default function Header() {
   
    return(
        <div className="header">
            <img src={logo} alt="DreamBroker logo" />
            <button onClick={()=>window.location.assign('http://localhost:3000/signup/')}>Sign me up!</button>
        </div>
    );
}