import React, { useState } from "react";
import * as R from 'ramda'
import { Link } from "react-router-dom"
import Modal from './../deleteOrder/Modal'

const OneOrder = (props) => {
  const { currentUser, usersOrders } = props;
  const [visible, setVisible] = useState(2)

  return (<React.Fragment>
    {usersOrders ? (
      usersOrders.slice(0, visible).map((usersOrder, i) => ( 
        usersOrder.email === currentUser.email ? (
          <div className="row" key={i}  >
            <div className="col s12 m12">
              <div className="card">
                <div className="card-content">
                  <div className='card-head'>
                    <Link to={`/services/${usersOrder.idServ}`} >
                      <span className="card-title"><h4 className='user-order-name' > {usersOrder.servName}</h4></span>
                    </Link>
                    <span className='cancel-order-btn'> <Modal thisOrder={usersOrder} /> </span>
                  </div>
                  <div className="card-action" />
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
        ) : (null)
      ))
    ) : (
        <h2>You have no orders yet...</h2>
      )}


    {usersOrders ? (visible < usersOrders.length && (
      <button onClick={() => setVisible(visible + 2)} type="button" className="order-load-more  btn-floating btn-large   waves-light red"> <i className="material-icons">expand_more</i></button>
    )) : <div> </div>}

    
  </React.Fragment>)
}

export default OneOrder