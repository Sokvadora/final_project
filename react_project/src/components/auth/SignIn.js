import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { Redirect } from 'react-router';

class SignIn extends Component {
  state = {
        email: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/home" />;

    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s6 white">
          <div className="input-field col s6">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="validate" required aria-required="true"  onChange={this.handleChange} className="validate" />
          </div>
          <div className="input-field col s6">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="validate" required aria-required="true"   onChange={this.handleChange} />
          </div>
          <div className="input-field col s6">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)