import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const prurl = "http://localhost:9300/orders/placeorder"

class Payment extends Component{
    constructor(){
        super()

        this.state = {
            booking_id: Math.floor(Math.random()*10000),
            cllg_name:'',
            name:'',
            phone:''
        }
    }

    handleChangeCollege = (event) => {
        this.setState({cllg_name:event.target.value})
    }

    handleChangeName = (event) => {
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})
    }

    handleSubmit = () => {
        fetch(prurl, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((this.props.history.push('/contact')))
    }



    async razorPayPaymentHandler(e){
        e.preventDefault();
        const orderUrl = "http://localhost:9300/razorpay/order"
        const response = await axios.get(orderUrl);

        const { data } = response;
        const options = {
            key: 'rzp_test_qAUvoBGfmIY8pY',
            name: "tarun",
            description: "tarun",
            order_id: data.id,
            handler: async (response) => {
                try {
                 const paymentId = response.razorpay_payment_id;
                 const url = `http://localhost:9300/payment/capture/${paymentId}`;
                 const captureResponse = await axios.post(url, {})
                 const successObj = JSON.parse(captureResponse.data)
                 const captured = successObj.captured;
                 console.log("App -> razorPayPaymentHandler -> captured", successObj)
                 if(captured){
                     console.log('success')
                 }
                 
                } catch (err) {
                  console.log(err);
                }
              },
              theme: {
                color: "#686CFD",
              },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
          }



    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Book Your College</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Booking ID</label> <br/>
                            <input type="text" name="booking_id" value={this.state.booking_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>College Name</label> <br/>
                            <input type="text" name="cllg_name" value={this.state.cllg_name} className="form-control" onChange={this.handleChangeCollege}/>
                        </div>
                        <div className="form-group">
                            <label>Student Name</label> <br/>
                            <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label> <br/>
                            <input type="text" name="phone" value={this.state.phone} className="form-control" onChange={this.handleChangePhone}/>
                        </div>
                        <Link type="button" class="btn btn-success btn-md" onClick={this.handleSubmit}>Submit</Link>
                    </div>
                </div>
                <div>
                    <a href="https://rzp.io/l/pgc7tFI4j" target="_blank"><button className="btn btn-primary">Pay Now</button></a>
                </div>
            </div>
        )
    }
}

export default Payment;