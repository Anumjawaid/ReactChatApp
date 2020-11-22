import React from 'react'   
import './style.css';
import { connect } from 'react-redux'
import {get_users} from '../store/actions/index'
import firebase from '../config/index'


class Chat extends React.Component{
    constructor(){
        super()
        this.state={
            chatuser:{},
            chats:[],
            message:""
        }
    }
    chat = ( user)=>{
        // console.log("Running")
        this.setState({
            chatuser:user
  })
        // let chatuser=this.state.chatuser
        let currentuser=this.props.current_user
        let mid=this.mergeuid(currentuser.uid,user.uid)
        console.log("chats",mid)
        
        this.getmessages(mid)
    }
    mergeuid(uid1,uid2){
        if (uid1<uid2){
            return uid1+uid2
        }
        else{
            return uid2+uid1
        }
    }
    sendmessage = ()=>{
    //   console.log("Message",this.state.message)
    let chatuser=this.state.chatuser
    let currentuser=this.props.current_user
    let mid=this.mergeuid(chatuser.uid,currentuser.uid)
    // console.log("Reciever",chatuser)
    // console.log("Sender",currentuser)
    // console.log("uid",this.mergeuid(chatuser.uid,currentuser.uid))
    firebase.database().ref('/').child(`chats/${mid}`).push({
        message:this.state.message,
        name:currentuser.name,
        uid:currentuser.uid
    })
     



    // this.state.chats.push({
    //     message:this.state.message
    // })
    this.setState({
        chats:this.state.chats,
        message:''
    })
    
    }
    getmessages = (uid)=>{
        console.log("getmessagerunningh")
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added',(messages)=>{
            this.state.chats.push(messages.val())
            console.log("Messages",messages.val())
            this.setState({
                chats:this.state.chats
            })
        })
    }
    componentDidMount(){
        console.log("this mount",this.props.get_users())
    }
    render(){
        console.log("Log Result",this.props.users)
        let user=this.props.current_user
        return(
            <div>
                <h1>Chat</h1>
                <h4>Current Users</h4>
        <h6>{user.name}</h6>
        <h6>{user.email}</h6>
        <img src={user.profile} alt=""/>
        <div className="chatcont" >
            <div className="chat">
                <h5>Chat Users:</h5>
                <ul>
                    {this.props.users.map((v,i)=>{
                        return v.uid !== user.uid && <li key={i}><img src={v.profile} />{v.name} 
                        <button onClick={()=>this.chat(v)}>Chat</button>
                        </li>

                    })}
                </ul>
            </div>
            <div className="chattext">
                <h5>Chat Here</h5>
                {Object.keys(this.state.chatuser).length ?
<div>
                 <h4>
                     <img src={this.state.chatuser.profile} />
                     {this.state.chatuser.name}
                 </h4>
                 <ul>
                     {this.state.chats.map((v,i)=>{
                         return <li style={{backgroundColor:v.uid === user.uid ? "red" :"purple"}} key={i}>{v.message}</li>
                     })}
                 </ul>
                <input value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})}type='text' placeholder='Enter Your Message Here' />
                <button onClick={this.sendmessage}>Send</button>
                </div>
                :
                <h4>No User</h4>
                }
            </div>
        </div>

            </div>
        )
    }
}
const mapstatetoprops = (state) => ({
    current_user:state.current_user,
    users:state.users
})
const mapdispatchtoprops = (dispatch) =>({
    get_users:() =>dispatch(get_users())
})
export default connect(mapstatetoprops,mapdispatchtoprops)(Chat);