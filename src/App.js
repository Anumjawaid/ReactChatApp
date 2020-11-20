import './App.css';
import React from 'react'
import AppRouter from './config/router'
import { connect } from 'react-redux';

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
    //   console.log("from app",this.props)
        return(
            <div>
                 <AppRouter/>
            </div>
        )
    }
}
export default App;