import React from 'react';
import './index.css'
import { connect } from 'react-redux'
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from 'react-router';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders'
import App from '../../App'


const PersonalSet = (props) => {

  useFirestoreConnect("services");
  const { auth } = props
  if (!auth.uid) return <Redirect to='/home' />
  return (
    <React.Fragment>
      <App>
        <div className="user-profile">
          <div className='row'>
            <UserProfile />
          </div>
          <div className='row'>
            <UserOrders />
          </div>
        </div>
      </App>
    </React.Fragment>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(PersonalSet);
