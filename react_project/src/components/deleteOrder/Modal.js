import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
 
import { withRouter } from "react-router-dom"
 import { currentOrder , deleteUserOrder } from '../../actions/applicationActions'
 import {compose} from 'redux'
import DeleteBtn  from './DeleteBtn'
 

class  Modal extends Component {
  constructor(props) {
    super(props);
    const {thisOrder} = props;
 
  }


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
             
               <h4 className="center">  Are you shure you want to cancel <b> { thisOrder.servName}</b>  date: <b> { thisOrder.servDate}</b>?  </h4>
               
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
 

 const mapStateToProps = (state, ownProps) => {
  
const iddd =  ownProps
//console.log(iddd)
  return {
    
    
  }
}  



const enhance = compose(
  withRouter,
  connect(mapStateToProps)
)
 

 export default enhance(Modal);

// export default Modal ;