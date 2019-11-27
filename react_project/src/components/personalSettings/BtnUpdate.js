

import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { compose } from 'redux'
import { updateProfileInfo } from '../../actions/applicationActions'


class BtnUpdate extends Component {
  constructor(props) {
    super(props);
    this.updateProfileInfo = this.updateProfileInfo.bind(this)
  }



  updateProfileInfo() {
    this.props.updateProfileInfo(this.props.userProfile)
  }

  render() {

    return (
      <div >
        <button onClick={this.updateProfileInfo} className="modal-close    black  btn-flat" style={{ color: 'white' }} >Yes</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const allUsers = state.firestore.ordered.users
  return {
    users: allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileInfo: (user) => dispatch(updateProfileInfo(user))
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)


export default enhance(BtnUpdate);

