import React, { Component } from "react";
import './index.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { compose } from 'redux'
import BtnUpdate from "./BtnUpdate";


class ModalUpdate extends Component {

  constructor(props) {
    super(props);
    const { userProfile } = props;
    this.state = {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      phone: userProfile.phone
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { userProfile } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="change-info-btn waves-light btn black modal-trigger"  
            data-target={userProfile.email}  style={{ marginLeft: '0'}}> Change info </div>
          <div ref={Modal => { this.Modal = Modal; }} id={userProfile.email} className="modal">
            <div className="modal-content">
              <h4 className='header-change-info'>Change profile information</h4>
              <span><b>First name:</b></span>
              <input type='text' id='firstName'   value={this.state.firstName}   required  pattern='/[^\s]/'  onChange={this.handleChange} />
              <span><b>Last name:</b></span>
              <input type='text' id='lastName'   value={this.state.lastName}    required pattern='/[^\s]/'   onChange={this.handleChange} />
              <span><b>Phone:</b></span>
              <input type='text' id='phone' name="phone" value={this.state.phone} className="validate " required pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' aria-required="true" onChange={this.handleChange} />
            </div>
            <div className="modal-change-btns  modal-footer">
              <div className="modal-close change-info-modal-close red btn-flat"  >No</div>
              <BtnUpdate userProfile={this.state} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
const user = state.firestore.data.users;
  return {
    user: user
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
)

export default enhance(ModalUpdate);

