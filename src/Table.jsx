import React from 'react'

const Table = ({history}) => {




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
                  
                      {history.map((element, index) => 
                      (
                          <tr>
                              <td key={index}>{element.date}</td>
                              <td key={index}>{element.object}</td>
                              <td key={index}>{element.amount}</td>
                          </tr>

                      )

                      )}
                      
                      
                  

                  
              </tbody>
          </table>
      </div></>
  )
}


export default Table;