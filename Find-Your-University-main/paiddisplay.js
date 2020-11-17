import React from 'react';

const PaidDisplay = (props) => {

    const renderOrder = ({paidData}) => {
        if(paidData){
            return paidData.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.cllg_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Order Details</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Restaurant Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrder(props)}
                </tbody>
            </table>
        </div>
    )
}


export default PaidDisplay;