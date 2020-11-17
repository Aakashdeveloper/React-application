import React from 'react'
import { Link } from 'react-router-dom';
import './particular.css';

const ParticularDisplay = (props) => {

    const collegeData = ({particulardata}) => {
        if(particulardata){
            return particulardata.map((item) => {
                return(
                    <div className="BoxContent">
                        <div className="row">
                            <h3>Here Is the Details about the University : {item.name}</h3>
                            <div className="cardRx">
                                <div className="nameX">
                                    <span className="glyphicon glyphicon-plane"></span>
                                    <span>Location | State </span>
                                    <span> : </span>
                                    <span>{item.city_name}</span>
                                    <span>  |  </span>
                                    <span>{item.state}</span>
                                </div>
                                <div className="nameTX">
                                    <span className="glyphicon glyphicon-education"></span>
                                    <span>NIRF | CutOff </span>
                                    <span> : </span>
                                    <span>{item.nirf}</span>
                                    <span>  |  </span>
                                    <span>{item.cutoff}</span>
                                </div>
                                <div className="nameBox">
                                    <div className="nameNx">
                                        <span className="glyphicon glyphicon-ok"></span>
                                        <span>PlacementRanking | Gender </span>
                                        <span> : </span>
                                        <span>{item.upr}</span>
                                        <span>  |  </span>
                                        <span>{item.gender}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cardNx">
                                <div className="nameBX">
                                    <span className="glyphicon glyphicon-th-list"></span>
                                    <span>List Of Branches Offered </span>
                                    <span> : </span> <br/>
                                    <span>{item.branch[0].name}</span> <br/>
                                    <span>{item.branch[1].name}</span> <br/>
                                    <span>{item.branch[2].name}</span>
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
                {collegeData(props)}
            </div>
        </div>
    )
}

export default ParticularDisplay;