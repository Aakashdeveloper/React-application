import React, {Component} from 'react';
import axios from 'axios';
import CollegeDisplay from './collegedisplay'


const clgurl = "http://localhost:9300/mains"


class College extends Component{
    constructor(props){
        super()

        this.state = {
            college:''
        }
    }

    render(){
        return(
            <React.Fragment>
                <CollegeDisplay collegedata={this.state.college}/>
            </React.Fragment>

        )
    }

    componentDidMount(){
        var cllg = this.props.match.params.id;
        axios.get(`${clgurl}/${cllg}`)
        .then((res) => {this.setState({college:res.data})})
    }

}

export default College;