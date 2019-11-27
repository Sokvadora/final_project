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
        <img src={'https://firebasestorage.googleapis.com/v0/b/final-project-epam.appspot.com/o/7af779b4743d9e3f70c881d740f19cd2.jpg?alt=media&token=05260dd8-2c6d-4e32-94c1-0f896003b469'} width="250" height="230" className="card-img circle responsive-img" alt="..." />
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



