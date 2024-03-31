import React from 'react'
import './App.css'
import SquirrelLogo from '/logo.svg'

/* TODO:
      add this to the header and wrap around it with the other components, see reusability lessons in scrimba */
const Header = () => {
  return (
      <>

   {/* shows the black line with the logo that is part of the header */}
      <header className="dashboard-header">

          <img className="dashboard-logo" src={SquirrelLogo} alt="Squirrel Banking Logo" />
          <h1 className="dashboard-title hide-xs">Squirrel Banking</h1>
          <button>Logout</button>
      </header>
      </>
  )
}


export default Header;