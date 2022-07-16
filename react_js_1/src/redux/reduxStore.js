import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from "redux-form"
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;