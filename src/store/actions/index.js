import firebase from '../../config/index'
// const set_data = (data) =>{
//     return (dispatch) =>{
//         console.log(data)
        
//             dispatch({type:"SETDATA",data:data})
            
        
//     }
// }
const logf = () => {
    return(dispatch) => {
        var provider =new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInwithPopup(provider)
        .then(function(result){
            var token=result.credential.accessToken;
            var user=result.user;

            console.log("user==>",user)
        }).catch(function(error){
            var errorCode=error.code;
            var errorMessage =error.message;
            console.log(errorMessage)
        });


    }
}


export {logf }