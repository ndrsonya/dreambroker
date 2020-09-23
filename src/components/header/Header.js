import React from "react";
import logo from "../images/logo.png";
import './index.scss';

/**
 * Header component
*/
export default function Header() {
   
    return(
        <div className="header">
            <img src={logo} alt="DreamBroker logo" />
            <button onClick={()=>window.location.href='#announce'}>Sign me up!</button>
        </div>
    );
}