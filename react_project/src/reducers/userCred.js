
const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case '@@reactReduxFirebase/LOGIN':
      return {
        ...state,
        uid: action.auth.uid
      };
    default:
      return state;
  }
};

 