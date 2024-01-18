import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  GET_DEVICE_COUNT_REQUEST,
  GET_DEVICE_COUNT_SUCCESS,
  GET_DEVICE_COUNT_ERROR,
  GET_DEVICE_DATA_REQUEST,
  GET_DEVICE_DATA_SUCCESS,
  GET_DEVICE_DATA_ERROR,
  GET_DEVICE_APP_DATA_REQUEST,
  GET_DEVICE_APP_DATA_SUCCESS,
  GET_DEVICE_APP_DATA_ERROR,
} from "../constants/DashboardConstants";

const initialState = {
  tokenSuccess: "",
  tokenError: "",
  deviceCount: "",
  deviceCountError: "",
  deviceData: "",
  deviceDataError: "",
  deviceAppData: "",
  deviceAppDataError: "",
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return {
        ...state,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        tokenSuccess: action.msg,
      };
    case GET_TOKEN_ERROR:
      return {
        ...state,
        tokenError: action.error,
      };
    case GET_DEVICE_COUNT_REQUEST:
      return {
        ...state,
      };
    case GET_DEVICE_COUNT_SUCCESS:
      return {
        ...state,
        deviceCount: action.data,
      };
    case GET_DEVICE_COUNT_ERROR:
      return {
        ...state,
        deviceCountError: action.error,
      };
    case GET_DEVICE_DATA_REQUEST:
      return {
        ...state,
      };
    case GET_DEVICE_DATA_SUCCESS:
      return {
        ...state,
        deviceData: action.data,
      };
    case GET_DEVICE_DATA_ERROR:
      return {
        ...state,
        deviceDataError: action.error,
      };
    case GET_DEVICE_APP_DATA_REQUEST:
      return {
        ...state,
      };
    case GET_DEVICE_APP_DATA_SUCCESS:
      return {
        ...state,
        deviceAppData: action.data,
      };
    case GET_DEVICE_APP_DATA_ERROR:
      return {
        ...state,
        deviceAppDataError: action.error,
      };
    default:
      return state;
  }
};

export default dashboard;
