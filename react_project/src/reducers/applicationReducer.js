const initialState = {
  aplicattionError: null
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_ERROR":
      console.log("submit error");
      return {
        ...state,
        aplicattionError: "application not submit"
      };
    case "SUBMIT_SUCCESS":
      console.log("application submit");

      return {
        ...state,
        aplicattionError: null
      };
    default:
      return state;
  }
};

export default applicationReducer;
