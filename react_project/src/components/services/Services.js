import React , {useState} from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect} from "react-redux-firebase";
import { Link } from "react-router-dom"
import App from '../../App'
import * as R from 'ramda' 



const Services = () => {
 

  
  useFirestoreConnect("services");
  const services = useSelector(state => state.firestore.ordered.services);
  const [visible, setVisible] = useState(4) 


  return (
    <App>
      {services ? (
        services.slice(0, visible).map((serv, i) => (
          <Link to={`/services/${serv.id}`} key={serv.id} className="card-serv col s12 m6 l6"  >
            <div className="card horizontal">
              <div className="card-image">
                <img src={serv.imgServ} width="200" height="200" className="card-img" alt="..." />
              </div>
              <div className="card-stacked">
              <div className="card-action" style={{paddingBottom:'0'}}>
                  <h5> {serv.name}</h5>
                </div>
                <div className="card-content" style={{paddingTop:'0'}}>
                  <p>{`${R.take(140, serv.description)}...`}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h2>Loading.... Please Wait</h2>
      )}
       
      {visible < services.length && (
        <button onClick={() => setVisible(visible + 2)} type="button" style={{marginLeft:'47%'}}  className="load-more  btn-floating btn-large   waves-light red"> <i className="material-icons">expand_more</i></button>
      )}
      
    </App>
  );
};

export default Services;






 
 
 