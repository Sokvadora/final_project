const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("not login");
            return {
                ...state,
                authError: "Login fileg"
            };
        case "LOGIN_SUCCESS":
            console.log("login");

            return {
                ...state,
                authError: null
            };
        case "SUGNOUT_SUCCESS":
            console.log("signout");
            return state;
        case "SUGNUP_SUCCESS":
            console.log("signup");
            return {
                ...state,
                authError: null
            };
        case "SUGNUP_ERROR":
            console.log("signup error");
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;
