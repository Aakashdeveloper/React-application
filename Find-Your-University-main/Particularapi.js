import React, { Component } from 'react';
import axios from 'axios';
import ParticularDisplay from './Particulardisplay';
import Login from './login';

const purl = "http://localhost:9300/maincollege"

class Particular extends Component{
    constructor(props){
        super()

        this.state = {
            university:''
        }
    }


    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-10">
                        <ParticularDisplay particulardata={this.state.university}/>
                    </div>
                    <div className="col-md-2">
                        <Login/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        var part = this.props.match.params.id;
        axios.get(`${purl}/${part}`)
        .then((res) => {this.setState({university:res.data})})
    }
}


export default Particular;
