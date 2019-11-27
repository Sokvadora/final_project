import React from "react";
import './index.css'
import { useFirestoreConnect, withFirebase } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from 'redux'
import App from '../../App'
import CheckInBtnModal from "../checkIn/CheckInBtnModal";


const OneServ = (props) => {
  useFirestoreConnect("services");
  const { oneService } = props;

  if (oneService) {
    return (
      <App>
        <div className='one-serv-content' style={{ padding: '20px' }}>
          <div className='img-content col s12 m6  l4'  >
            <img src={oneService.imgServ} width="300" height="300" className="card-img" alt="..." />
          </div>
          <div className='info-serv col s12 m6 l8'>
            <h1 className='one-service-name'> {oneService.name}</h1>
            <p className='one-service-info'>{oneService.description}</p>
            <div className='row price-btn'>
              <h2 > ${oneService.price}</h2>
              <CheckInBtnModal {...props} />
            </div>
          </div>
        </div>
      </App>
    );
  } else {
    return (
      <App>
        <div> null </div>
      </App>
    );
  }

};


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.firebase.profile
  const id = ownProps.match.params.id
  const services = state.firestore.data.services;
  const oneService = services ? services[id] : null

  return {
    oneService: oneService,
    currentUser: currentUser
  }
}
export default compose(
  connect(mapStateToProps), withFirebase)(OneServ);



