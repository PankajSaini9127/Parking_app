const initialState = {
    loading:false
};




export default function loadingReducer(state=initialState,action){
    switch (action.type) {
        case "SET_LOADING":
            return {
                loading:action.payload
            }
            
    
        default:return state;
    }
};