import { createStore, applyMiddleware, combineReducers } from "redux";
import loginReducer from './LoginReducer';
import thunkMiddleware from "redux-thunk";

const middleWare = applyMiddleware(thunkMiddleware);

const rootReducer = combineReducers({ loginReducer });

const store = createStore(rootReducer, middleWare);

export default store;