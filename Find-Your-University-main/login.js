import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import './login.css';
import { Link } from 'react-router-dom';


class Login extends Component{

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    render(){
        return(
            <div className="loginRX">
                <GoogleLogin 
                clientId="352685657634-0c4hfcc4djenmc8f2ej6vr6avbldh2gj.apps.googleusercontent.com"
                buttonText="Sign In With Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}/>
                <Link to="/payment" style={{ textDecoration: 'none' }} type="button" class="btnRX">Book Slot</Link>
                
            </div>
        )
    }
}

export default Login;