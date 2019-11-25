import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li className='list-item'> <NavLink to='/signup'>Signup</NavLink></li>
        <li className='list-item'> <NavLink to='/signin'>Login</NavLink></li>
      </React.Fragment>
    );
  }
}
export default SignedOutLinks;