import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect} from "react-redux-firebase";
import { Link } from "react-router-dom"
import App from '../../App'
import * as R from 'ramda' 



const Services = () => {
 
  useFirestoreConnect("services");
  const services = useSelector(state => state.firestore.ordered.services);

  return (
    <App>
      {services ? (
        services.map((serv, i) => (
 <Link to={`/services/${serv.id}`} key={serv.id} className="card-serv col s12 m6 l6"> 
 
          <div className="card horizontal" > 
          <div className="card-image">
          <img src= {  serv.imgServ} width="200" height="200" className="card-img" alt="..." />
      </div>
      <div className="card-stacked"> 
      <div className="card-content">
          <p>{`${R.take(40, serv.description)}...`}</p>
        </div>
        <div className="card-action">
       <h5> {serv.name}</h5>
        </div>
      </div>
          </div>
          </Link>
        ))
      ) : (
          <h2>Loading.... Please Wait</h2>
        )}
    </App>
  );
};

export default Services;