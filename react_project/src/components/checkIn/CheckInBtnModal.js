import React, { Component } from "react";
import './index.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { newApplication} from '../../actions/applicationActions'
import { compose } from 'redux'


class CheckInBtnModal extends Component {
  constructor(props) {
    super(props);

    const { currentUser, oneService, auth } = props;
    const serviceId = props.match.params.id;

    this.state = {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      phone: currentUser.phone,
      email: currentUser.email,
      servName: oneService.name,
      servDescription: oneService.description,
      servPrice: oneService.price,
      uid: auth,
      serviceId: serviceId
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
    console.log(this.state.email);
    event.preventDefault();
    this.props.newApplication(this.state)
  }



  render() {
    const { oneService, auth } = this.props;
    const user = (auth) ? (
      <React.Fragment>
        <span><b>First name:</b></span>
        <input type='text' id='firstName' readOnly value={this.state.firstName} onChange={this.handleChange} />
        <span><b>Last name:</b></span>
        <input type='text' id='lastName' readOnly value={this.state.lastName} onChange={this.handleChange} />
        <span><b>Phone:</b></span>
        <input type='text' id='phone' readOnly value={this.state.phone} onChange={this.handleChange} />
      </React.Fragment>
    ) : (
        <React.Fragment>
          <span><b>First Name:</b></span>
          <input type='text' id='firstName'  required 
          className="validate" aria-required="true" placeholder='firstName' onChange={this.handleChange} />
          <div>
            <span><b>Last Name:</b></span>
            <input type='text' id='lastName' placeholder='lastName' 
             required className="validate" aria-required="true"
             onChange={this.handleChange} />
          </div>
          <div>
            <span><b>Phone:</b></span>
            <input type='text' id='phone' placeholder='phone' name="phone" 
            className="validate" required pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
             aria-required="true" onChange={this.handleChange} />
          </div>
          <span><b>Email:</b></span>
          <input type='email' id='email' placeholder='email' className="validate"
           required aria-required="true" onChange={this.handleChange} />

        </React.Fragment>
      )


    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className='btn-new-order'>
          <div className=" btn-floating btn-large modal-trigger waves-effect waves-light red "
           data-target="modal1"><i className="material-icons">create</i></div>
          <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4>Submit your application</h4>
              <div className='user-check'>
                {user}
              </div>
              <div className="add-order-description">
                <div><span><b>Service:</b>  {oneService.name}</span></div>
                <div><span><b>Description:</b> {oneService.description}</span></div>
                <div><span><b>Price:</b> {oneService.price}</span></div>
              </div>
              <div>
                <span><b>Date:</b></span>
                <input type="date" min="2019-11-25" max="2020-02-30" id='date' 
                placeholder='date' className="validate" required aria-required="true" 
                onChange={this.handleChange} />
              </div>
              <div>
                <span><b>Time:</b></span>
                <input type="time" id='time' placeholder='time' className="validate" 
                required aria-required="true" onChange={this.handleChange} />
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" className="new-order-btn-submit modal-close black btn-flat" 
              style={{marginRight: '20px'}} value="Submit" />
              <div className="new-order-btn-close  modal-close red btn-flat">Cancel</div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const services = state.firestore.data.services;
  const oneService = services ? services[id] : null

  return {
    firstName: state.firebase.profile.firstName,
    lastName: state.firebase.profile.lastName,
    phone: state.firebase.profile.phone,
    auth: state.firebase.auth.uid,
    oneService: oneService
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newApplication: (newApp) => dispatch(newApplication(newApp)),

  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)


export default enhance(CheckInBtnModal);