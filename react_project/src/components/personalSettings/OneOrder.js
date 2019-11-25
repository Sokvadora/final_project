  import React from "react";
import { withFirebase,useFirestoreConnect,getFirebase, firebaseConnect, populate  } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useSelector } from "react-redux";
import * as R from 'ramda'
import { Link } from "react-router-dom"
import Modal from './../deleteOrder/Modal'


    const OneOrder = (props ) => {
        const {   currentUser, usersOrders  } = props;
    return  (<React.Fragment> 
 
       {usersOrders? (
            usersOrders.map((usersOrder, i) => (
             
                usersOrder.email === currentUser.email? (  
                    
                  <div className="row" key={usersOrder.id}>
    <div className="col s12 m12">
      <div className="card"  >
        <div className="card-content  ">
        <div className='card-head  '>
        <span className="card-title"><h4> {usersOrder.servName}</h4></span> <span className='cancel-order-btn'> <Modal thisOrder ={usersOrder}/> </span>
         </div>
        <div className="card-action"/>
          <div className="card-order-info">  
        <div className='col s12 l5'> 
          <span> {`${R.take(100, usersOrder.servDescription)}...`}</span>
 </div>
 <div className='order-info col s4 l3'>
          <div> <p><b>Date:</b></p> <p className='order-date-time'>{usersOrder.servDate}</p></div>
           </div>
           <div className='order-info col s4 l3'> 
          <span><p><b>Time:</b></p> <p className='order-date-time'>{usersOrder.servTime}</p></span>
</div>
<div className='col l1'> 
          <span> <h4>${usersOrder.servPrice}</h4></span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
          ) : ( <div style={{display:"none"}} key={usersOrder.id}></div>)
          
          
        ))
      ) : (
        <h2>You have no orders yet...</h2>
        )}
      </React.Fragment> )
}

export default OneOrder