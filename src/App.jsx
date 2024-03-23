import { useState } from 'react'
import SquirrelLogo from '/logo.svg'
import './App.css'


function App() {
 

  return (
    <div id="app">
      <section className="dashboard-page">
        <header className="dashboard-header">
        
          <img className="dashboard-logo" src={SquirrelLogo} alt="Squirrel Banking Logo"/>
            <h1 className="dashboard-title hide-xs">Squirrel Banking</h1>
            <button>Logout</button>
        </header>
        <div className="balance">
          <div>Balance</div>
          <span id="balance">325.00</span>
          <span id="currency">$</span>
        </div>
        <div className="dashboard-content">
          <div className="transactions-title">
            <h2 id="description">Test account</h2>
            <button>Add transaction</button>
          </div>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Object</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody id="transactions">
              <tr>
                <td>2022-01-01</td>
                <td>Pocket money</td>
                <td>50.00</td>
              </tr>

              <tr>
                <td>2022-01-03</td>
                <td>Book</td>
                <td>-10.00</td>
              </tr>

              <tr>
                <td>2022-01-14</td>
                <td>Sandwich</td>
                <td>-5.00</td>
              </tr>

              <tr>
                <td>2022-01-22</td>
                <td>Mad</td>
                <td>50.00</td>
              </tr>

              <tr>
                <td>2022-01-25</td>
                <td>Allowance</td>
                <td>100.00</td>
              </tr>

              <tr>
                <td>2022-01-28</td>
                <td>Gift card</td>
                <td>100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
    </div>
  )
}

export default App;
