
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
 import { currentOrder , deleteUserOrder } from '../../actions/applicationActions'
 import {compose} from 'redux'
 
 import { withFirebase,useFirestoreConnect,getFirebase, firebaseConnect, populate  } from "react-redux-firebase";
 
 
 import { useSelector } from "react-redux";
 import {deleteOrder} from '../../actions/applicationActions'

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
   
    const {   currentUser, usersOrders, order  } = props;
  
    this.deleteOrder = this.deleteOrder.bind(this)
  }

 

deleteOrder( ) {

 console.log(this.props)
  this.props.deleteOrder(this.props.order)
  
}

  render() {
      
    const { order } = this.props;
   

    return (
        <div >
         {/* <div id = {order.id} onClick={this.handleClick} className="modal-close    red btn-flat"  >Disagree</div> */}
         <button  id = {order.id}  onClick={this.deleteOrder} className="modal-close    red btn-flat" >Del</button>  
      </div>
    );
  }
}
 

 const mapStateToProps = (state, ownProps) => {
    const allUsersOrders =  state.firestore.ordered.allUsersOrders 
// const iddd =  ownProps
// console.log(iddd)
  return {
    usersOrders:allUsersOrders
    
  }
}  

 const mapDispatchToProps = (dispatch) => {
   
  return {

    deleteOrder: ( order) => dispatch(deleteOrder( order))
  }
}  

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)
 

 export default enhance(DeleteBtn);

// export default Modal ;