// import firebase from 'firebase'
import firebase from '../../config/index'

// import firebase from 'firebase'
// const set_data = (data) =>{
//     return (dispatch) =>{
//         console.log(dta)
        
//             dispatch({type:"SETDATA",data:data})
            
        
//     }
// }
const logf = () => {
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
                alert("User login Successfully")
            })
            console.log("user==>",create_user)
        }).catch(function(error){
            var errorCode=error.code;
            var errorMessage =error.message;
            console.log(errorMessage)
        });


    }
}


export {logf }