import React from 'react';
import './mains_page.css';
import {Link} from 'react-router-dom';

const MainsDisplay = (props) => {

    const renderList = ({quickdata}) => {
        if(quickdata){
            return quickdata.map((item) => {
                return(
                    <div className="boxtextone">
                        <div className="boxtext">
                            <div className="context-two">
                                <Link to={`/mains/${item.city}`} className="name" style={{textDecoration:"none"}}>{item.city_name}</Link>
                            </div>
                            <div className="para">
                                Here is the section for all the list of college's in the state {item.state_name} 
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }


    return(
        <React.Fragment>
            <div className="quickContainer">
                {renderList(props)}
            </div>
        </React.Fragment>
    )
}
   
export default MainsDisplay;