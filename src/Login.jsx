import React from 'react'

export const Login = () => {
  return (
      <>
          <h1>Please Sign In</h1>
          <form action="">
              <label htmlFor='username'></label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
              />
              <br />
              <label htmlFor='password'></label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
              />
              <br />
              <button type="submit">Sign in</button>
          </form>
          </>
  )
}
