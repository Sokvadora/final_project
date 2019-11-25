
const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case '@@reactReduxFirebase/SET_PROFILE':
      return {
        ...state,
        userProfile: action.profile
      };
    default:
      return state;
  }
};