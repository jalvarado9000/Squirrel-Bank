import { useState } from 'react'
import './App.css'

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

const accountNumber = 'Test Account'
const addTransactionLabel = 'Add Transaction'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RegisterPage />} />
      <Route path="Dashboard" element={<DashboardPage 
        title={accountNumber}
        titles={addTransactionLabel} />} />
      <Route path="Login" element={<LoginPage />} />
    </Route>
  )
)

function App() {





  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App;
