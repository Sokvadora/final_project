import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createRootReducer from './reducers/rootReducer'
import routes from './routes/routes'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/fbConfig'


const composeEnhancers = composeWithDevTools({
  realtime: true
});


const history = createBrowserHistory() 
const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore }), routerMiddleware(history)];

const store = createStore( 
  createRootReducer(history), 
  composeEnhancers(applyMiddleware(...middlewares))
)


const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    applications: "applications",
    useFirestoreForProfile: true,
    storageBucket: "final-project-epam.appspot.com"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}; 
 

ReactDOM.render( 
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root'));
 

