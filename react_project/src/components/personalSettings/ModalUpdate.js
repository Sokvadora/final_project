import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
 import { currentOrder , deleteUserOrder } from '../../actions/applicationActions'
 import {compose} from 'redux'
import BtnUpdate from "./BtnUpdate";
// import DeleteBtn  from './DeleteBtn'
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

class  ModalUpdate extends Component {
  constructor(props) {
    super(props);
    
    
   
   

  //const services = useSelector(state => state.firestore.ordered.services);
    // this.state = {
    //     order:order
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
     
    const { userProfile,user  } = props;
    console.log(this.state)
  this.state = {
    // firstName: userProfile.firstName,
    // lastName: userProfile.lastName,
    // phone: userProfile.phone 
    firstName:  userProfile.firstName,
    lastName: userProfile.lastName,
    phone: userProfile.phone 
    
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
   
}
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }
 
   
//   _click(){
     
//     this.setState(prevState => ({readOnly: !prevState.readOnly}))
//  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
     
  }

// handleChange = e => {
     
//     this.setState({
//         [e.target.id]: e.target.value
//     });
// };


  handleSubmit(event) {
   
    event.preventDefault();
    // this.props.deleteUserOrder(this.state)
    // this.props.newAppOrdertoUser(this.state)
  }

// handleLog = (order)=> {
//     this.props.currentOrder(order)
// }
 
  render() {
    const { userProfile} = this.props;
     
    //   <React.Fragment>
    //     <span><b>First name:</b></span>
    //     <input type='text' id='firstName' readOnly value={this.state.firstName} onChange={this.handleChange} />
    //     <span><b>Last name:</b></span>
    //     <input type='text' id='lastName' readOnly value={this.state.lastName} onChange={this.handleChange} />
    //     <span><b>Phone:</b></span>
    //     <input type='text' id='phone' readOnly value={this.state.phone} onChange={this.handleChange} />
    //   </React.Fragment>
    
     

    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className="change-info-btn waves-light btn modal-trigger"
            data-target= {userProfile.email}> Change info </div>
          <div ref={Modal => { this.Modal = Modal; }} id={userProfile.email} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4>Submit your application</h4>


              
              <span><b>First name:</b></span>
        <input type='text' id='firstName' name="firstName"  className="validate" required pattern='/[^\s]/' aria-required="true"   onChange={this.handleChange} />
        <span><b>Last name:</b></span>
        <input type='text' id='lastName' name="lastName"  className="validate" required pattern='/[^\s]/' aria-required="true"    onChange={this.handleChange} />
        <span><b>Phone:</b></span>
        <input type='text' id='phone'   name="phone"  className="validate" required pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' aria-required="true"  onChange={this.handleChange} />

               
            </div>
            <div className="modal-footer">
            {/* <button   onClick={this.props.currentOrder}  >Del</button> */} */}
            {/* <input type="submit"   className="modal-close blue btn-flat" value="Submit" /> */} */}
            {/* <DeleteBtn orderId = {order.id} />  */}
             <div className="modal-close    red btn-flat"   >Disagree</div>
               <BtnUpdate userProfile ={this.state}/>  
               {/* <ModalUpdate userProfile ={user}/> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 

const mapStateToProps = (state, ownProps) => {
    
    const user = state.firestore.data.users;
     
  
    return {
       
      user: user
    }
  }

 const mapDispatchToProps = (dispatch) => {
  return {
    // deleteUserOrder: (thisOrder) => dispatch(deleteUserOrder(thisOrder)),
    //  currentOrder: (order) => dispatch(currentOrder(order))
  }
}  

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)
 

 export default enhance( ModalUpdate);

// export default Modal ;