const INITIL_STATE={
    users:[],
    current_user:{}
}
export default (state=INITIL_STATE,action)=>{
    console.log("action",action)
    switch(action.type){
        case 'SETDATA':
            return({
                ...state,
                users:[...state.users,action.data]
            })
        case 'SETUSER':
            return({
                ...state,
                current_user:action.payload
            })
        default:
            return state    
    }
    console.log(state)
   
}
