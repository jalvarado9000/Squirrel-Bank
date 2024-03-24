import React from 'react'
import { useState } from 'react'

const MakeTransactionForm = ({ newTransaction }) => {

  const [newDate, setNewDate] = useState('');
  const [newItem, setNewItem] = useState('');
  const [newAmount, setNewAmount] = useState('');

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
    event.preventDefault();
    let obj = {
      id: Date.now(),
      date: newDate,
      object: newItem,
      amount: newAmount,
    };

    newTransaction(obj);
    setNewDate('')
    setNewItem('')
    setNewAmount(0)


  };


  return (
    <>
      <form id="transactionForm" onSubmit={handleForm}>

        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" required value={newDate} onChange={handleDate} />


        <label htmlFor="object">Object</label>
        <input id="object" name="object" type="text" maxLength="50" required value={newItem} onChange={handleItem} />

        <label>Amount (use negative value for debit)</label>
        <input id="amount" name="amount" type="number" defaultValue="0" step="any" required value={newAmount} onChange={handleAmount} />


        {/* <div id="transactionError" className="error" />
          <div className="dialog-buttons">
              <button className="button-alt" formAction="javascript:cancelTransaction()" formNoValidate>Cancel</button>
              <button id="okButton" formAction="javascript:confirmTransaction()">OK</button>
          </div>*/}

        <input type="submit" />

      </form>
    </>
  )
}

export default MakeTransactionForm;