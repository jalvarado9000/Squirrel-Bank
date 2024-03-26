import { useState } from 'react'

import './App.css'

import transactions from './TRANSACTIONS'

import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'
import { DashboardPage } from './DashboardPage'


function App() {

  const accountNumber = 'Test Account'
  const addTransactionLabel = 'Add Transaction'

  const [allTransaction, setAllTransactions] = useState(transactions);


  let handleNewTransactions = (newTransactions) => {
    (setAllTransactions([...allTransaction, newTransactions]))
  }

  return (
    <>
      <div className="dashboard-page">
 

        <LoginPage />

        <DashboardPage 
        balance={allTransaction} 
        title={accountNumber} 
        history={allTransaction} 
        titles={addTransactionLabel} 
        newTransaction={handleNewTransactions} 
        />
        
        <RegisterPage />
        
       


      </div>

    </>
  )
}

export default App;
