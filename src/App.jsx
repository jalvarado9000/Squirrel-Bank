import { useState } from 'react'

import './App.css'
import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'


function App() {




  return (
    <>
      <div className="dashboard-page">
        <Header />
        <Balance />
        <Label title={'Test Account'} />
        <Table />
        <Label title={'Add Transaction'} />
        <MakeTransactionForm />

      </div>

    </>
  )
}

export default App;
