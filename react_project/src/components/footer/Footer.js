import React from 'react';
import  './index.css'


const Footer = () => (
  <React.Fragment> 
   <footer className="page-footer">
          <div className="container container-footer">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text text-footer"  >Final project</h5>
                <p className="grey-text text-lighten-4">For EPAM JS Course 2019 </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text text-footer">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/epam-js-september-2019">epam-js-september-2019</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container container-footer ">
            © 2019 Suiazova Elena
            <a className="grey-text text-lighten-4 right" href="https://github.com/Sokvadora">Github</a>
            </div>
          </div>
        </footer>
  </React.Fragment>
);
export default Footer;
