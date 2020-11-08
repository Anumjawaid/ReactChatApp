import React from 'react';
import './style.css';
import { connect  }from 'react-redux'

class Homee extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log("Propsss",this.props)
        return(
            <div>
                 <h1>Home of the chat App</h1>
            </div>
        )
    }
}
const mik = (state)=>({
        users : state.users
        // name:'Abc'
})
export default connect(mik,null)(Homee);