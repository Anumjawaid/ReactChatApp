import firebase from '../../config/index'
import {useHistory }from 'react-router-dom'


// import firebase from 'firebase'
// const set_data = (data) =>{
//     return (dispatch) =>{
//         console.log(dta)
        
//             dispatch({type:"SETDATA",data:data})
            
        
//     }
// }
const logf = (history) => {
    return(dispatch) => {
        var provider =new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result){
            var token=result.credential.accessToken;
            var user=result.user;
            let create_user={
                name:user.displayName,
                email:user.email,
                profile:user.photoURL,
                uid:user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type:'SETUSER',payload:create_user})
                alert("User login Successfully")
                // useHistory().push('/chat')    this doesnot work
                history.push('/chat')
            })
            console.log("user==>",create_user)
        }).catch(function(error){
            var errorCode=error.code;
            var errorMessage =error.message;
            console.log(errorMessage)
        });


    }

}
// ***************************************************
const get_users = ()=>{
    return(dispatch)=>{
        let users=[]
        firebase.database().ref('/').child('users').on('child_added',(date)=>{
            console.log("firebase data=>",date.val())
            users.push(date.val())
            dispatch({type:'SETFIREBASEDATABASE',payload:users})
        })
    }
}

export {logf,get_users }