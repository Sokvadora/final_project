 
 
export const newApplication = newApp => {

  return (dispatch, getState, { getFirebase}) => {
     
    const firebase = getFirebase(); 
    const db = firebase.firestore();
    const currentDate = new Date().toLocaleDateString();

    const newDate = (newApp.date).split('.').join("")
    const mewEmail = (newApp.email).split('.').join("").split('@').join("")
     
    

   const userId = mewEmail.concat( '_', newDate, '_', newApp.serviceId)

    return db.collection('allUsersOrders')
      .doc(userId)
      .set({
        idServ: newApp.serviceId,
        firstName: newApp.firstName,
        lastName: newApp.lastName,
        email: newApp.email,
        phone: newApp.phone,
        servName: newApp.servName,
        servDescription: newApp.servDescription,
        servPrice: newApp.servPrice,
        orderDate: currentDate,
        servDate: newApp.date,
        servTime: newApp.time,

      })
      .then(() => {
        dispatch({ type: "SUBMIT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SUBMIT_ERROR", err });
      });
  };
};





export const deleteOrder = order  =>{
  return (dispatch, getState, { getFirebase}) => {

  const firebase = getFirebase(); 
  const db = firebase.firestore();
  db.collection('allUsersOrders')
    .doc(order.id).delete().then(() => {
      dispatch({ type: "DELETE_ORDER_SUCCESS",
     cencelOrder: order });
      console.log('Order deleted')
    })
    .catch(err => {
      dispatch({ type: "DELETE_ORDER_ERROR", err });
      console.log('Order delete error')
    });
  }
}





export const  updateProfileInfo = userProfile  =>{
  return (dispatch, getState, { getFirebase} ) => {
  const firebase = getFirebase(); 
  const db = firebase.firestore();
 const state = getState()
 const userId = state.userCred.uid
 console.log(userId)
   db.collection('users')
    .doc(userId).update({
      phone: userProfile.phone,
      firstName: userProfile.firstName  ,
      lastName: userProfile.lastName,
      initials: userProfile.firstName[0] + userProfile.lastName[0],}).then(() => {
        db.collection('allUsersOrder ')
    .doc(userId).update({
      phone: userProfile.phone,
      firstName: userProfile.firstName  ,
      lastName: userProfile.lastName 
      })

      dispatch({ type: "UPDATE_PROFILE_SUCCESS",
      userProfile: userProfile });
      console.log('Update profile succes')
    })
    .catch(err => {
      dispatch({ type: "UPDATE_PROFILE_ERROR", err });
      console.log('Update profile error')
    });
  }
}