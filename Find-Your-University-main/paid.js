import React,{ Component } from 'react';
import axios from 'axios';
import PaidDisplay from './paiddisplay';

const ourl = "http://localhost:9300/orders"

class PaidOrders extends Component{
    constructor(){
        super()

        this.state ={
            orders:''
        }
    }

    render(){
        return(
            <div className="container">
                <PaidDisplay paidData={this.state.orders}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(ourl)
        .then((res) => {this.setState({orders:res.data})})
    }
}

export default PaidOrders;