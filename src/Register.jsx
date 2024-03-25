import React from 'react'

export const Register = () => {
    return (
        <>
            <h1>Create Account</h1>


            <form>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                />
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="Confirm Password"
                    required
                />
                <br />
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}
