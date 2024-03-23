import React from 'react'

const Table = () => {
  return (
      <>
      <div className="dashboard-content">
          
          <table className="transactions-table">
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Object</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody id="transactions">
                  <tr>
                      <td>2022-01-01</td>
                      <td>Pocket money</td>
                      <td>50.00</td>
                  </tr>

                  <tr>
                      <td>2022-01-03</td>
                      <td>Book</td>
                      <td>-10.00</td>
                  </tr>

                  <tr>
                      <td>2022-01-14</td>
                      <td>Sandwich</td>
                      <td>-5.00</td>
                  </tr>

                  <tr>
                      <td>2022-01-22</td>
                      <td>Mad</td>
                      <td>50.00</td>
                  </tr>

                  <tr>
                      <td>2022-01-25</td>
                      <td>Allowance</td>
                      <td>100.00</td>
                  </tr>

                  <tr>
                      <td>2022-01-28</td>
                      <td>Gift card</td>
                      <td>100.00</td>
                  </tr>
              </tbody>
          </table>
      </div></>
  )
}


export default Table;