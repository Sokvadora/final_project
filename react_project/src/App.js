import React from 'react';
import Footer from './components/footer/Footer'

const App = ({ children }) => (
  <React.Fragment> 
    <div className="container z-depth-3">
      <div className="row content-row">
          <div className="content-place "> 
          {children}
          </div>
      </div>

    </div>
    <Footer /> 
  </React.Fragment>
);
export default App;

 