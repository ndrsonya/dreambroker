import React, { useState, useEffect } from "react";
import './index.scss';
import lady from "../images/lady.png";
import sir from "../images/sir.png";
import inspire from "../images/inspire.png";
import connect from "../images/connect.png";
import learn from "../images/learn.png";
import benchmark from "../images/benchmark.png";
import { Player } from 'video-react';


export default function MainArea() {
    return (
        <div className="main">
            <div className="Wellcome">
                <h1>Welcome to the Q1 User Group Meeting</h1>

                <div className="host">
                    <p>Host</p>
                    <p>Traficom | Kumpulantie 11, 00520 Helsinki</p>
                </div>

                <div className="date">
                    <p>Date and time</p>
                    <p>8.30 - 10.30, TBA</p>
                </div>

                <div className="video">
                    <Player
                    poster="https://dreambroker.com/channel/2hfsjted/iuac6jhn/get/poster?etag=1581950976000">
                        <source src="https://dreambroker.com/channel/2hfsjted/iuac6jhn/get/fullhd.mp4" />
                    </Player>
                </div>

                <div className="covidAnnounce">
                    <img src={lady} alt="Lady picture" />
                    <p>In the light of the uncertainty caused by coronavirus (COVID-19) and as a health and safety precaution, we have decided to postpone the Q1 User Group Meetings.</p>
                </div>

                <div className="agenda">
                    <img src={sir} alt="Lady picture" />
                    <p>In the light of the uncertainty caused by coronavirus (COVID-19) and as a health and safety precaution, we have decided to postpone the Q1 User Group Meetings.</p>
                </div>

                <div className="tailored">
                    <h2>Tailored For Dream Broker Studio Users</h2>

                    <div className="values">

                        <div>
                            <img src={connect} alt="Connect picture" />
                            <h3>Connect</h3>
                            <p>with other users that are located in your city across different
                           functions and industries</p>
                        </div>

                        <div>
                            <img src={benchmark} alt="Bechmark picture" />
                            <h3>Benchmark</h3>
                            <p>with other online video use cases, communication
                           roadmaps or content strategies </p>
                        </div>

                        <div>
                            <img src={inspire} alt="Inspire picture" />
                            <h3>Inspire</h3>
                            <p>and be inspired by the use case presentation and interactive discussions</p>

                        </div>

                        <div>
                            <img src={learn} alt="Learn picture" />
                            <h3>Learn</h3>
                            <p>more about how to use the features and find solutions to your challenges</p>
                        </div>

                    </div>
                    <div className="joinCommunity">
                        <h2>Join the Community!</h2>
                        <p>Connect with other users already or continue the discussions after the meeting via our Linkedin group!</p>
                    </div>

                </div>

            </div>
        </div>
    )
}