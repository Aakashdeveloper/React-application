import React,{ Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import MainsDisplay from './mainsdisplay';
import './mains_page.css';

const url = "http://localhost:9300/city"
// const lurl = "http://localhost:9300/mainspage?state=Tamil%20Nadu"

class Optionsapi extends Component{
    constructor(props){
        super()

        this.state={
            location:''
        }
    }

    Staterender = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.id}>
                        {item.state_name}
                    </option>
                )
            })
        }
    }

    
    Handle = (event) => {
        const cityid = event.target.value
        const rurl = (`${url}/${cityid}`)
        fetch(rurl,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
    } 

    render(){
        return(
            <React.Fragment>
                <div className="picplace">    
                    <div id="texthead">
                        Choose Your Location
                    </div>
                    <div id="selector">
                        <select id="options" onChange={this.Handle}>
                            <option>--------------------------SELECT STATE---------------------------</option>
                            {this.Staterender(this.state.location)}
                        </select>
                        <select id="options" onChange={this.Handle}>
                            <option>-----------------------------SELECT CITY------------------------</option>
                            {this.Staterender(this.state.location)}
                        </select>
                    </div>
                    <div className="boxhead">
                        Choose Your Location
                    </div>
                </div>
                <MainsDisplay quickdata={this.state.location}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        // console.log(this.props);
        // var city = this.props.match.params.id;
        // var curl = (`${url}/${city}`)
        fetch(url,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
       
        // axios.get(`${url}${meal}`)
        // .then((res) => {this.setState({hotelist:res.data})})
    }
}

export default withRouter(Optionsapi);