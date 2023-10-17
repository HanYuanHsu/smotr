import React from "react";

export default function RegisterPanel() {
    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the form from submission
        const registrationForm = document.getElementById("registration-form");
        const formData = new FormData(registrationForm);

        fetch("http://localhost:3001/register", {
            method: "POST",
            body: formData
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <>
            <h2>Register</h2>
            <form id="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                />
            </form>
        </>
    );
}
