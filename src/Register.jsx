import React from 'react'

export const Register = () => {
    return (
        <>
            <h1>Create Account</h1>


            {/* form to register */}
            <form>
                {/* insert username */}
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                />
                <br />
                {/* insert email */}
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <br />
                {/* insert password */}
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                {/* insert re-confirmed password */}
                <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="Confirm Password"
                    required
                />
                <br />
                {/* submit button */}
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}
