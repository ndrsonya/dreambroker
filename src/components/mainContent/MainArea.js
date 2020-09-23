import React, { useState, useEffect } from "react";
import './index.scss';
import lady from "../images/lady.png";
import sir from "../images/sir.png";
import inspire from "../images/inspire.png";
import connect from "../images/connect.png";
import learn from "../images/learn.png";
import benchmark from "../images/benchmark.png";


/**
 * Main content of the landing page
*/
export default function MainArea() {


    const [event, setEvent] = useState({
        addresss: '',
        event_name: '',
        date: '',
        start_time: '',
        end_time: '',
        agenda: [],
        host_name: '',
        link: ''
    });

    /**
    * Getting data about the event from the server
    */
    useEffect(() => {
        fetch("http://localhost:1337/events")
            .then(response => response.json())
            .then(
                (res) => {
                    setEvent({
                        address: res[0].address,
                        event_name: res[0].event_name,
                        date: res[0].date,
                        start_time: res[0].start_time,
                        end_time: res[0].end_time,
                        agenda: res[0].agenda,
                        host_name: res[0].host_name,
                        link: 'https://www.google.com/maps/place/' + res[0].address
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);



    return (
        <div className="main">
            <div className="wellcome">

                <h1>Welcome to the {event.event_name}</h1>

                <div className="horizontalDivs">

                    <div className="host">
                        <h5>
                            <b>Host</b><br />
                            {event.host_name} | {event.address}
                        </h5>
                        <p><a href={event.link}> Get directions</a></p>
                    </div>

                    <div className="date">
                        <h5>
                            <b>Date and time</b><br />
                            {event.start_time} - {event.end_time}, TBA
                        </h5>
                    </div>
                </div>
            </div>

            <div className="video">

                <video controls poster="https://dreambroker.com/channel/2hfsjted/iuac6jhn/get/poster?etag=1581950976000">
                    <source src="https://dreambroker.com/channel/2hfsjted/iuac6jhn/get/fullhd.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                </video>

            </div >

            <div className="covidAnnounce" id="covidAnnounce">
                <img src={lady} alt="Lady" />
                <h5>In the light of the uncertainty caused by coronavirus (COVID-19) and as a health and safety precaution, we have decided to <b>postpone</b> the Q1 User Group Meetings.</h5>
            </div>


            <div className="agenda">

                <div className="ArrayItems">
                    <h2>Agenda</h2>
                    <ul>
                        {
                            event.agenda.map((item) =>
                                <li key={item.name}>
                                    <p><b>{item.time} {item.name} </b></p>
                                    <p>{item.desc}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <img src={sir} alt="Sir" />
            </div>

            <div className="tailored">
                <h2>Tailored For Dream Broker Studio Users</h2>

                <div className="values">

                    <div>
                        <img src={connect} alt="Connect" />
                        <h3>Connect</h3>
                        <p>with other users that are located in your city across different
                           functions and industries</p>
                    </div>

                    <div>
                        <img src={benchmark} alt="Bechmark" />
                        <h3>Benchmark</h3>
                        <p>with other online video use cases, communication
                           roadmaps or content strategies </p>
                    </div>

                    <div>
                        <img src={inspire} alt="Inspire" />
                        <h3>Inspire</h3>
                        <p>and be inspired by the use case presentation and interactive discussions</p>

                    </div>

                    <div>
                        <img src={learn} alt="Learn" />
                        <h3>Learn</h3>
                        <p>more about how to use the features and find solutions to your challenges</p>
                    </div>

                </div>
            </div>

            <div className="joinCommunity">
                <h2>Join the Community!</h2>
                <h5>Connect with other users already or continue the discussions after the meeting via our <a href="https://www.linkedin.com/groups/8630968/">Linkedin group!</a></h5>
            </div>




        </div>
    )
}