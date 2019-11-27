import React, { Component } from "react";
import './index.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import DeleteBtn  from './DeleteBtn'
 

class  Modal extends Component {
 
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true 
    };
    M.Modal.init(this.Modal, options);
  }


  
  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    const { thisOrder} = this.props;

    return (
        <div>
        <form onSubmit={this.handleSubmit} className='form-delete-order'>
          <div className="btn-floating btn-medium  modal-trigger waves-effect waves-light red"
            data-target=  { thisOrder.id}> <i className="material-icons">remove</i> </div>
          <div ref={Modal => { this.Modal = Modal; }} id= { thisOrder.id} className="modal-delete-order modal modal-fixed-footer">
            <div className=" modal-content">
               <h5 className="center">  Are you shure you want to cancel <b> { thisOrder.servName}</b>  date: <b> { thisOrder.servDate}</b>?  </h5>
            </div>
            <div className="modal-footer">
             <DeleteBtn order ={thisOrder}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 

 export default Modal ;