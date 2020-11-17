import React, { Component } from 'react';
import './login.css';

class Contact extends Component{
    

    render(){
        return(
            <React.Fragment>
                <div class="contactNx">
                    <h2>Want to Know about us...Leave a Mail To Us</h2>
                </div>
                <div class="emailNx">
                    <div class="containerRX">
                        <form target="_blank" action="https://formsubmit.co/tarunpakao13@gmail.com" method="POST">
                            <span class="nameNx">NAME</span><br/><input class="formNX" type="text" name="name" required/>
                            <span class="emailNX">EMAIL</span><br/><input class="form-controlNx" type="email" name="email" required/>
                            <span class="textNX">MESSAGE</span><br/><textarea class="controlNx" name="message" required></textarea><br/>
                            <button class="btnNX" type="submit">Submit Form</button>
                        </form>
                    </div>
                </div>
                <div className="mapX">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.7459964344885!2d83.13102521419147!3d17.662185299471865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396f0bfc088ef5%3A0xf90fb65fc1d9def5!2s153%2FA%2C%20Sector%2012%2C%20Steel%20Plant%20Twp%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530032!5e0!3m2!1sen!2sin!4v1605266082893!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </React.Fragment>
        )
    }

}


export default Contact;