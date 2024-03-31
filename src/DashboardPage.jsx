import { useState } from 'react'

import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'
import transactions from './TRANSACTIONS'

export const DashboardPage = ({ title, titles }) => {

  /* TODO: 
    1. make Header wrap around in order to have a layout */



  /* default values to display on the table */
  const [allTransaction, setAllTransactions] = useState(transactions);


  /* updates the table if a user has input a transaction on the app */
  let handleNewTransactions = (newTransactions) => {
    (setAllTransactions([...allTransaction, newTransactions]))
  }

  return (
    <>
      {/* Display the content of the dashboard page   */}
      <Header />
      {/* updates array of transaction, passed updated array to display balance */}
      <Balance balance={allTransaction} />
      
      <Label title={title} />
      <Table history={allTransaction} />
      <Label titles={titles} />
      <MakeTransactionForm newTransaction={handleNewTransactions} />
    </>
  )
}
