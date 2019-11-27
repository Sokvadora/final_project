import React, { Component } from 'react'
import './index.css'
import { signUp } from '../../actions/authActions'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { withFirebase } from "react-redux-firebase";
import { compose } from 'redux'
import App from '../../App'
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/home" />;

    return (
      <App>
        <div className="container sign-up-container">
          <form onSubmit={this.handleSubmit} className="white" >
            <h4 className="sign-up-header grey-text text-darken-3">Sign Up</h4>
            <div className="input-field">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" className="validate"
                required pattern='/[^\s]/' aria-required="true" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Lastname</label>
              <input type="text" id="lastName" name="lastName" className="validate"
                required pattern='/[^\s]/' aria-required="true" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" className="validate"
                required pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
                aria-required="true" onChange={this.handleChange} />
              <span className="helper-text" data-error="please enter your correct phone number"
                data-success="right"> </span>
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="validate" required aria-required="true"
                onChange={this.handleChange} />
              <span className="helper-text" data-error="invalid email" data-success="right"> </span>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" className="validate" id="password"
                required pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' aria-required="true"
                onChange={this.handleChange} />
              <span className="helper-text" data-error="your password should include words and numbers"
                data-success="right"> </span>
            </div>
            <div className="input-field">
              <button className="btn black" style={{ width: '200px' }}>Sign Up</button>
              <div className="red-text center">{authError ? <p>{authError}</p> : null}</div>
            </div>
          </form>
        </div>
      </App>
    );
  }
}

const mapStateToProps = (history) => {
  return {
    authError: history.auth.authError,
    auth: history.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

const enhance = compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(SignUp)


