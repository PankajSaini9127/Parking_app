import { createStore,combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import loadingReducer from './reducer/loadingReducer';



const reducer = combineReducers({auth:authReducer,loading:loadingReducer});

const store = createStore(reducer);

export default store;