import React from 'react';
import { Link } from 'react-router-dom';
import './colleges.css';


const CollegeDisplay = (props) => {

    const renderList = ({collegedata}) => {
        if(collegedata){
            return collegedata.map((item) => {
                return(
                    <div className="itemRx">
                        <div className="row">
                            <div className="containRN">
                                <h3>Here are the List of all the colleges available at {item.city_name}</h3>
                                <div className="cllg_name col-md-5">
                                    College Name: <br/>
                                    <Link className="cllg_nameRx" style={{ textDecoration: 'none' }} to={`/maincollege/${item._id}`}>{item.name}</Link>
                                </div>
                                <div className="city_name">
                                    State: <br/> 
                                    <div className="stateX">{item.state}</div>
                                </div>
                                <div className="ownership_name">
                                    <h2>Ownership: </h2> <br/> {item.ownership}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }


    return(
        <div className="row">
            <div className="col-md-12">
                <div className="collegedetails">
                    <h2>Welcome to the list of College's available</h2>
                </div>
                {renderList(props)}
            </div>
        </div>
    )
}

export default CollegeDisplay;