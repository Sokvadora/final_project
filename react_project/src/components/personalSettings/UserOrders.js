import React from "react";
import { withFirebase,useFirestoreConnect,getFirebase, firebaseConnect, populate  } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useSelector } from "react-redux";
import OneOrder from './OneOrder'

 


    const UserOrders = (props) => {
    
     useFirestoreConnect("allUsersOrders");
     
    const { currentUser } = props;

const allUsersOrders = useSelector(state => state.firestore.ordered.allUsersOrders);

const currentCutEmail = (currentUser.email).split('.').join("").split('@').join("")

   
 
 
   
  
  return (
    <React.Fragment>
     <h2>Your orders</h2>
    <OneOrder  { ...props }  /> 
    </React.Fragment>
  )
       
 
      }   
    
 
  
const mapStateToProps = (state) => {
 const currentUser = state.firebase.profile
const currentUserEmail = state.firebase.profile.email
const us = state.firestore.ordered[currentUserEmail]
 const allUsersOrders =  state.firestore.ordered.allUsersOrders 
 
 
    return {
      us: us,
      currentUserEmail,
      currentUser: currentUser,
      usersOrders:allUsersOrders
    }
  }
       
  export default compose(
    connect(mapStateToProps), withFirebase)(UserOrders);