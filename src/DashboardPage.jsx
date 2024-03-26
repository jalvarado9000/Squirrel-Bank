import React from 'react'

import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'
import transactions from './TRANSACTIONS'

export const DashboardPage = ({title, titles}) => {

  const [allTransaction, setAllTransactions] = useState(transactions);


  let handleNewTransactions = (newTransactions) => {
    (setAllTransactions([...allTransaction, newTransactions]))
  }
  return (
      <>       <Header />
      <Balance balance={allTransaction} />
          <Label title={title} />
      <Table history={allTransaction} />
          <Label titles={titles} />
      <MakeTransactionForm newTransaction={handleNewTransactions} /></>
  )
}
