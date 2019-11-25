import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer'
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import userCred from './userCred'
import applicationReducer from './applicationReducer'



export default history => combineReducers({
  auth: authReducer,
  userCred,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  applications: applicationReducer,
  router: connectRouter(history)
}) 
