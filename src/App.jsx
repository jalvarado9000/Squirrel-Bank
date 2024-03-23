import { useState } from 'react'

import './App.css'
import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'
import transactions from './TRANSACTIONS'


function App() {

  const accountNumber = 'Test Account'
  const addTransactionLabel = 'Add Transaction'



  return (
    <>
      <div className="dashboard-page">
        <Header />
        <Balance balance={transactions}/>
        <Label title={accountNumber} />
        <Table history={transactions}/>
        <Label title={addTransactionLabel} />
        <MakeTransactionForm />

      </div>

    </>
  )
}

export default App;
