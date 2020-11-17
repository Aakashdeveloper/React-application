import React from 'react';
import {Link} from 'react-router-dom';
import './optionspage.css';

const Option = () => {

        return(
            <div className="main">
                <h1>Please Select Your Ranking</h1>
                <div class="cardone">
                    <div class="contentone">
                        <h2>JEE MAINS</h2>
                        <p>Here are the List of All the college's that Select the Students According to JEE MAINS Ranking</p>
                        <Link to="/city" style={{ textDecoration: 'none' }}><a target="blank"> Dive Inn </a></Link>
                    </div>
                    <img src="https://i.ibb.co/983XzmZ/Advanced.jpg" alt="Advanced"/>
                </div>
            </div>
        )
}

export default Option;