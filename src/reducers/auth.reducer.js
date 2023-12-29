import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
} from "../constants/AuthConstants";

const initialState = {
  tokenerror: "",
  loggingIn: false,
  loginMsg: "",
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return {
        loggingIn: !state.loggingIn,
      };
    case GET_TOKEN_SUCCESS:
      return {
        loginMsg: action.msg,
        loggingIn: !state.loggingIn,
      };
    case GET_TOKEN_ERROR:
      return {
        tokenerror: action.err,
      };
    default:
      return state;
  }
};

export default authentication;
