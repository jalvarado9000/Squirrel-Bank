import { useState } from 'react'

import './App.css'
import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'
import transactions from './TRANSACTIONS'
import { HeaderOther } from './HeaderOther'
import { Login } from './Login'
import { Register } from './Register'


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
        <Header />
        <Balance balance={allTransaction} />
        <Label title={accountNumber} />
        <Table history={allTransaction} />
        <Label title={addTransactionLabel} />
        <MakeTransactionForm newTransaction={handleNewTransactions} />

        <Header />
        <HeaderOther />
        <Login />
        <Header />
        <HeaderOther />
        <Register />


      </div>

    </>
  )
}

export default App;
