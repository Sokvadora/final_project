import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../components/home/Home'
import Header from '../components/header/Header'
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Services from '../components/services/Services'
import OneServ from '../components/oneService/OneServ'
import PersonalSet from '../components/personalSettings/PersonalSet'


export default (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/services" component={Services} />
      <Route path="/services/:id" component={OneServ} />
      <Route path="/profile/:id" component={PersonalSet} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
   
    </Switch>
  </React.Fragment>
);