import { useState } from 'react'
import './App.css'
import transactions from './TRANSACTIONS'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'
import { DashboardPage } from './DashboardPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RegisterPage />} />
      <Route path="Dashboard" element={<DashboardPage balance={allTransaction}
        title={accountNumber}
        history={allTransaction}
        titles={addTransactionLabel}
        newTransaction={handleNewTransactions} />} />
      <Route path="Login" element={<LoginPage />} />
    </Route>
  )
)

function App() {

  const accountNumber = 'Test Account'
  const addTransactionLabel = 'Add Transaction'

  const [allTransaction, setAllTransactions] = useState(transactions);


  let handleNewTransactions = (newTransactions) => {
    (setAllTransactions([...allTransaction, newTransactions]))
  }

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App;
