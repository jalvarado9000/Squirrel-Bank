import React from 'react'

const Table = ({ history }) => {


    return (
        <>
            <div className="dashboard-content">

                <table className="transactions-table">
                    {/* displays the subject expected on the table */}
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Object</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {/* displays the array in the history prop */}
                    <tbody id="transactions">

                        {history.map((element) =>
                        (
                            <tr>
                                <td key={element.id}>{element.date}</td>
                                <td key={element.id}>{element.object}</td>
                                <td key={element.id}>{element.amount}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div></>
    )
}


export default Table;