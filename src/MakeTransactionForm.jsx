import React from 'react'

const MakeTransactionForm = () => {
  return (
      <>
        <form id="transactionForm">

          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" required />


          <label htmlFor="object">Object</label>
          <input id="object" name="object" type="text" maxLength="50" required />

          <label>Amount (use negative value for debit)</label>
          <input id="amount" name="amount" type="number" defaultValue="0" step="any" required />


          <div id="transactionError" className="error" />
          <div className="dialog-buttons">
              <button className="button-alt" formAction="javascript:cancelTransaction()" formNoValidate>Cancel</button>
              <button id="okButton" formAction="javascript:confirmTransaction()">OK</button>
          </div>
      </form>
      </>
  )
}

export default MakeTransactionForm;