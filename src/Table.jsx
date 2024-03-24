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
                  
                      {history.map((element) => 
                      (
                          <tr>
                              <td key={element.id}>{element.date}</td>
                              <td key={element.id}>{element.object}</td>
                              <td key={element.id}>{element.amount}</td>
                          </tr>

                      )

                      )}
                      
                      
                  

                  
              </tbody>
          </table>
      </div></>
  )
}


export default Table;