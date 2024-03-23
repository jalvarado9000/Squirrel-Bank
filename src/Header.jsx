import React from 'react'
import './App.css'
import SquirrelLogo from '/logo.svg'
const Header = () => {
  return (
      <>
      <header className="dashboard-header">

          <img className="dashboard-logo" src={SquirrelLogo} alt="Squirrel Banking Logo" />
          <h1 className="dashboard-title hide-xs">Squirrel Banking</h1>
          <button>Logout</button>
      </header>
      </>
  )
}


export default Header;