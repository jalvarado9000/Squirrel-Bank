import { useState } from 'react'
import './App.css'
import transactions from './TRANSACTIONS'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'
import { DashboardPage } from './DashboardPage'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"


function App() {

  const accountNumber = 'Test Account'
  const addTransactionLabel = 'Add Transaction'

  const [allTransaction, setAllTransactions] = useState(transactions);


  let handleNewTransactions = (newTransactions) => {
    (setAllTransactions([...allTransaction, newTransactions]))
  }

  return (
    <>

      <BrowserRouter>
      <div className="dashboard-page">
 

          <nav>
            
            <NavLink to="/">Register</NavLink>
            <br />
            <NavLink to="Dashboard">Dashboard</NavLink>
            <br />
            <NavLink to="Login">Login</NavLink>
          </nav>

          <Routes>
            <Route index element={<RegisterPage />} />
            <Route path="Dashboard" element={<DashboardPage balance={allTransaction}
              title={accountNumber}
              history={allTransaction}
              titles={addTransactionLabel}
              newTransaction={handleNewTransactions} />} />
            <Route path="Login" element={<LoginPage />} />
          </Routes>
        
        
       


      </div>
      </BrowserRouter>

    </>
  )
}

export default App;
