

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};



export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SUGNOUT_SUCCESS' })
        })
    }
}


export const signUp = newUser => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const db = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {
                return db.collection("users").doc(res.user.uid).set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                        phone: newUser.phone,
                        email: newUser.email
                    })
                    .then(() => {
                        dispatch({ type: "SUGNUP_SUCCESS" });
                    })
                    .catch(err => {
                        dispatch({ type: "SUGNUP_ERROR", err });
                    });
            });
    };
};


