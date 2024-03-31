import React from 'react'

export const Login = () => {
    return (
        <>

            <h1>Please Sign In</h1>
            {/* form for login */}
            <form action="">
                {/* insert username */}
                <label htmlFor='username'></label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                />
                <br />
                {/* insert password */}
                <label htmlFor='password'></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                {/* submit form */}
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}
