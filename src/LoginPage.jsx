import React from 'react'
import { HeaderOther } from './HeaderOther'
import { Login } from './Login'
import Header from './Header'

/* TODO:
1. wrap around the login the other components in order for login to be a child of header */

export const LoginPage = () => {

  return (
    <>
      <Header />
      <HeaderOther />
      <Login />
    </>
  )
}
