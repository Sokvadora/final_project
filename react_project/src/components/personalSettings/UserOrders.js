import React from "react";
import { withFirebase, useFirestoreConnect } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from 'redux'
import OneOrder from './OneOrder'

const UserOrders = (props) => {
  useFirestoreConnect("allUsersOrders");

  return (
    <React.Fragment>
      <h2 style={{ paddingLeft: '10px' }}>Your orders</h2>
      <OneOrder  {...props} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  const currentUser = state.firebase.profile
  const currentUserEmail = state.firebase.profile.email
  const allUsersOrders = state.firestore.ordered.allUsersOrders

  return {
    currentUserEmail,
    currentUser: currentUser,
    usersOrders: allUsersOrders
  }
}

export default compose(
  connect(mapStateToProps), withFirebase)(UserOrders);