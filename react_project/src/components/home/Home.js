import React from 'react';
import  HeadImg from './HeadImg';
import { connect } from 'react-redux'
import { useFirestoreConnect } from "react-redux-firebase";
import App from '../../App'
import About from './About'

const Home = () => {

  useFirestoreConnect("services");
  return (
    <App>
      <HeadImg />
      <About/> 
    </App>
  )
}



const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home);
