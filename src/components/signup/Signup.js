import React, { useState, useEffect } from "react";
import './index.scss';
import { TextField, FormControl } from '@material-ui/core';
import validator from 'validator';

/**
 * Signup component
*/

export default function Signup() {
    const [guest, setGuest] = useState({
        name: '',
        surname: '',
        email: '',
        company: ''
    });



    /**
    * POST new guest data to server
    */
    const addGuest = guest => {
        fetch("http://localhost:1337/guests/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(guest)
        })
            .then(_ => {
                alert("Successfull SignUp");

            })
            .catch(err => console.error(err))
    };

    /**
    * Function submits the input data from the form
    */
    const handleSubmit = () => {
        validateUserInput();
    }

    /**     
    * Function validates the email
    */
    const validateUserInput = () => {
        let validEmail = validator.isEmail(guest.email);
        if (validEmail) {
            addGuest(guest);
        }
        else {
            setGuest({
                name: '',
                surname: '',
                email: '',
                company: ''
            });
            alert("Please enter a valid email!");
        }
    }

    /**     
    * Changing the guest state
    */
    const inputChanged = (event) => {
        setGuest({ ...guest, [event.target.name]: event.target.value });
    };

    return (
        <div className="signupForm">
            <FormControl fullWidth={true} >

                <TextField label="Name: " variant="outlined" name="name" id="outlined-basic"
                    value={guest.name} onChange={e => inputChanged(e)} style={{ margin: 8 }} />

                <TextField label="Surname: " variant="outlined" name="surname" id="outlined-basic"
                    value={guest.surname} onChange={e => inputChanged(e)} style={{ margin: 8 }} />

                <TextField label="Email: " variant="outlined" name="email" id="outlined-basic"
                    value={guest.email} onChange={e => inputChanged(e)} style={{ margin: 8 }} />

                <TextField label="Company: " variant="outlined" name="organisation" id="outlined-basic"
                    value={guest.organisation} onChange={e => inputChanged(e)} style={{ margin: 8 }} />

                <button
                    onClick={() => handleSubmit()}>
                    Sign Up to the event!
                </button>

            </FormControl>
        </div>
    );
}