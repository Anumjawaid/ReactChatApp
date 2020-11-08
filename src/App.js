import Homee from './containers/Home';
import './App.css';
import React from 'react'
import { connect } from 'react-redux';

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
      console.log("from app",this.props)
        return(
            <div>
                 <Homee></Homee>
            </div>
        )
    }
}
export default App;