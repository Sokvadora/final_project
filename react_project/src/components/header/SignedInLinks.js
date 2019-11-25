import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = (props) => {
  const { uid } = props 
  return (
    <React.Fragment> 
      {/* //задать hover */}
      <li className='list-item'>
        <div role="menuitem" onClick={props.signOut} style={{ cursor: "pointer" }}>Log Out</div>
      </li>
      <li>
        <NavLink to={`/profile/${uid}`} className='btn btn-floating black lighten-1'> {props.profile.initials} </NavLink>
      </li>
    </React.Fragment>
  );
}



const mapStateToProps = (state) => {
  return {
    uid: state.userCred.uid,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);