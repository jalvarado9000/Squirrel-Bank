import React from 'react'

import Header from './Header'
import Balance from './Balance'
import Table from './Table'
import Label from './Label'
import MakeTransactionForm from './MakeTransactionForm'

export const DashboardPage = ({balance, title, history, newTransaction, titles}) => {
  return (
      <>       <Header />
          <Balance balance={balance} />
          <Label title={title} />
          <Table history={history} />
          <Label titles={titles} />
          <MakeTransactionForm newTransaction={newTransaction} /></>
  )
}
