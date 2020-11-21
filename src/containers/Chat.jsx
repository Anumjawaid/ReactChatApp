import React from 'react'   
import { connect } from 'react-redux'

class Chat extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log("users==>",this.state)
        return(
            <div>
                <h1>Chat</h1>
            </div>
        )
    }
}
const mapstatetoprops = (state) => ({
    current_user:state.current_user,
})
export default connect(mapstatetoprops,null)(Chat);