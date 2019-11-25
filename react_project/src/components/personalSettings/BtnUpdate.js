

import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import {compose} from 'redux'
import {updateProfileInfo} from '../../actions/applicationActions'


class BtnUpdate extends Component {
  constructor(props) {
    super(props);
  // console.log(props)
    const {   currentUser, usersOrders, order, userProfile  } = props;
  
    this.updateProfileInfo = this.updateProfileInfo.bind(this)
  }

 

  updateProfileInfo( ) {

 //console.log(this.props)
  this.props.updateProfileInfo(this.props.userProfile)
  
}

  render() {
      
    const { user, userProfile } = this.props;
   

    return (
        <div >
         
         <button     onClick={this.updateProfileInfo} className="modal-close    red btn-flat" >Change Info</button>  
      </div>
    );
  }
}
 

 const mapStateToProps = (state, ownProps) => {
    const allUsers =  state.firestore.ordered.users 
  return {
    users:allUsers
    
  }
}  

 const mapDispatchToProps = (dispatch) => {
   
  return {
    updateProfileInfo: (user) => dispatch(updateProfileInfo( user))
  }
}  

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)
 

 export default enhance(BtnUpdate);

