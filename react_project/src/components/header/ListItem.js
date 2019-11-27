import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { isLoaded, getFirebase } from 'react-redux-firebase'


const ListItem = (props) => { 
  const { auth, profile } = props
  const links = !isLoaded(auth) ? <div> </div> : auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
 
 
  return (
    <nav className='nav-wrapper'  style={{background:'black'}}>
      <div className='container'>
        <ul className='  right  '>
          <li className='list-item'><NavLink to='/home'>Home</NavLink></li>
          <li className='list-item'> <NavLink to='/services'>Services</NavLink></li>
          {links}
        </ul>
      </div>
    </nav>
  );

}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(ListItem);