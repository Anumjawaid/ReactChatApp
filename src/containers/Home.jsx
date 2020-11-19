import React from 'react';
import './style.css';
import { connect  }from 'react-redux'
import {logf} from '../store/actions/index'

class Homee extends React.Component{
    constructor(){
        super()
    }
    static getDerivedStateFromProps(props,state){
        console.log("coming from drs,",props)
        return{
            
        }
    }
    render(){
        let user={name:"Umair",email:'umai892hk@com'}
        console.log("Propsss",this.props)
        return(
            <div>
                 <h1>Home of the chat App</h1>
                  <button onClick={()=>this.props.logf()}>Login</button>
                  {/* <button onClick={()=>this.props.set_data(user)}>SetData</button> */}
            </div>
        )
    }
}
const mik = (state)=>({
        users : state.users
        // name:'Abc'
})
const mid = (dispatch) =>({
    // set_data :(data)=>dispatch(set_data(data))
    logf: ()=>dispatch(logf())
})
export default connect(mik,mid)(Homee);