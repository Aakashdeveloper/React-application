import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <React.Fragment>
            <div className="foot-content">
                <center>
                <h3 className="copy-right">&copy; Tarun Bharadwaj 2020</h3>
                </center>
                <div>
                    <span className="#0077b5 social-media"><a href="">LinkedIN</a></span>
                    <a href="" className="social-media">Instagram</a>
                    <a href="" className="social-media">WhatsApp</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer