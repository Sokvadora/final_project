import React from "react";
import { withFirebase } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from 'redux'
import ModalUpdate from './ModalUpdate'


const UserProfile = (props) => {
  const { user } = props;

  return (
    <React.Fragment>
      <div className='user-photo col s12 m5 l5 center'>
        <img src={'https://firebasestorage.googleapis.com/v0/b/final-project-epam.appspot.com/o/servImgs%2Fexample.JPG?alt=media&token=631aa21d-ee4a-46ab-9643-09ffda3b9a73'} width="250" height="230" className="card-img circle responsive-img" alt="..." />
      </div>
      <div className='user-info col s12 m7 l7' >
        <h1 className='user-profile-name'> {user.firstName} {user.lastName}</h1>
        <div className="profile-email">
          <span>Email: </span> <span>{user.email} </span>
        </div>
        <div className="profile-phone">
          <span>Phone: </span> <span>{user.phone} </span>
        </div>
        <ModalUpdate userProfile={user} />
      </div>
    </React.Fragment>
  )
};


const mapStateToProps = (state) => {
  const id = state.userCred.uid
  const user = state.firebase.profile;
  return {
    user: user,
    id: id
  }
}
export default compose(
  connect(mapStateToProps), withFirebase)(UserProfile);



