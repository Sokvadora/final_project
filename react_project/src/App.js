import React from 'react';

const App = ({ children }) => (
  <React.Fragment> 
    <div className="container z-depth-3">
      <div className="row">
          <div className="content-place "> 
          {children}
          </div>
      </div>
    </div>
  </React.Fragment>
);
export default App;

 