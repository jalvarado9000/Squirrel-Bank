
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


/* TODO:
1. add more router pages to display details about transactions
2. have array of testAccountNumber
3. not hard coding 'Add Transaction'
4. make nicer CSS
5. make the login and register Work, make them communicate with the dashboard to authenticate.
6. make truthy or falsy to display the balance or not on the header {header && `Balance ${balance}`}, something like that.
 */


/* testing how it would display the name on the account or number */
const accountNumber = 'Test Account'
/* testing how it would display*/
const addTransactionLabel = 'Add Transaction'


/* Using router 6.4 we are routing are components to display our webpage */
const router = createBrowserRouter(
  createRoutesFromElements(
    /* RootLayout is the component that has our page structure */
    <Route path="/" element={<RootLayout />}>

      {/* this route to register user */}
      <Route index element={<RegisterPage />} />

      {/* when the user successfully login they would enter their dashboard page */}
      <Route path="Dashboard" element={<DashboardPage
        title={accountNumber}
        titles={addTransactionLabel} />} />

      {/* this route to login user */}
      <Route path="Login" element={<LoginPage />} />

    </Route>
  )
)

function App() {
  return (
    <>
      {/* lets us display the routers pages on our app */}
      <RouterProvider router={router} />
    </>
  )
}

export default App;
