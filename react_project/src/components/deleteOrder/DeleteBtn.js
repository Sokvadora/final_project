
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from "react-router-dom"
import { deleteOrder } from '../../actions/applicationActions'

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
    this.deleteOrder = this.deleteOrder.bind(this)
  }


  deleteOrder() {
    this.props.deleteOrder(this.props.order)
  }

  render() {

    const { order } = this.props;
    return (
      <div>
        <button id={order.id} onClick={this.deleteOrder} 
        className="modal-close btn-delete-order red btn-flat">Yes</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const allUsersOrders = state.firestore.ordered.allUsersOrders
  return {
    usersOrders: allUsersOrders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: (order) => dispatch(deleteOrder(order))
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)


export default enhance(DeleteBtn);

