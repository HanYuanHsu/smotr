import React from "react";

export default function RegisterPanel() {
    const handleSubmit = () => {

    }

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>

            </form>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    );
}


