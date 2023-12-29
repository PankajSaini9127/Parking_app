


const initialStore = {
    auth:"false",
    token:null,
    data:null
};


function authReducer(state=initialStore,action){

    switch (action.type){
        case "SET_AUTH":
            return {
                auth:true,
                token:action.payload.authToken,
                data:action.payload.data
            };
            
            case "LOGOUT":
                return {
                    auth:false,
                    token:null,
                    data:null
                }
    
        default:
            return state;
    }
};


export default authReducer;