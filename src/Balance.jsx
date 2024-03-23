import React from 'react'

const Balance = ({balance}) => {


  let current = balance.reduce((counter, value) =>{
    return counter + value.amount;
  },0);

  return (
      <>
      <div className="balance">
          <div>Balance</div>
          <span id="currency">$</span>
          <span id="balance">{current}</span>
          
      </div>
      </>
  )
}
export default Balance;