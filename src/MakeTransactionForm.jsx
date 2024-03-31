import React from 'react'
import { useState } from 'react'

const MakeTransactionForm = ({ newTransaction }) => {

  /*saves the date of purchase, item purchased and amount*/
  const [newDate, setNewDate] = useState('');
  const [newItem, setNewItem] = useState('');
  const [newAmount, setNewAmount] = useState('');


  /* get the inputs typed in the form */
  let handleDate = (event) => {
    setNewDate(event.target.value)
  }
  let handleItem = (event) => {
    setNewItem(event.target.value)
  }
  let handleAmount = (event) => {
    setNewAmount(parseInt(event.target.value))
  }


  let handleForm = (event) => {
    /* page wont refresh after hitting the submit button */
    event.preventDefault();
    /* creates object with input from the form */
    let obj = {
      id: Date.now(),
      date: newDate,
      object: newItem,
      amount: newAmount,
    };

    /* callback to send obj to be used outside of the component */
    newTransaction(obj);
    /* resets values after the form has been submited */
    setNewDate('')
    setNewItem('')
    setNewAmount(0)


  };


  return (
    <>{/* add transaction form */}
      <form id="transactionForm" onSubmit={handleForm}>

        {/* insert date */}
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" required value={newDate} onChange={handleDate} />

        {/* insert item */}
        <label htmlFor="object">Object</label>
        <input id="object" name="object" type="text" maxLength="50" required value={newItem} onChange={handleItem} />

        {/* insert amount */}
        <label>Amount (use negative value for debit)</label>
        <input id="amount" name="amount" type="number" defaultValue="0" step="any" required value={newAmount} onChange={handleAmount} />

        {/* submit button */}
        <input type="submit" />

      </form>
    </>
  )
}

export default MakeTransactionForm;