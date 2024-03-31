import React from 'react'

const Balance = ({ balance }) => {

  /*   TODO:
    1. get rid of this part and put on the header a truthy or falsy statement on the header */


  /* recieves balance props to accuratly dipslay the balance, and update properly */
  let current = balance.reduce((counter, value) => {
    return counter + value.amount;
  }, 0);

  return (
    <>
      {/* displaying the Balance to the user */}
      <div className="balance">
        <div>Balance</div>
        <span id="currency">$</span>
        <span id="balance">{current}</span>
      </div>
    </>
  )
}
export default Balance;