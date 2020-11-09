const INITIL_STATE={
    users:[{
        name:"Anum",
        email:'anum45@.com'

    },
    {
        name:"husn",
        email:'husn45@.com'
    }
]
}
export default (state=INITIL_STATE,action)=>{
    console.log("action",action)
    switch(action.type){
        case 'SETDATA':
            return({
                ...state,
                users:[...state.users,action.data]
            })
        default:
            return state    
    }
    console.log(state)
   
}
