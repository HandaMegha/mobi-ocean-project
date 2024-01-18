import {
  GET_TOKEN_REQUEST,
  GET_DEVICE_COUNT_REQUEST,
  GET_DEVICE_DATA_REQUEST,
  GET_DEVICE_APP_DATA_REQUEST,
} from "../constants/DashboardConstants";

export const getToken = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};

export const getDeviceWiseCount = () => {
  return {
    type: GET_DEVICE_COUNT_REQUEST,
  };
};

export const getDeviceData = () => {
  return {
    type: GET_DEVICE_DATA_REQUEST,
  };
};

export const getDeviceAppData = () => {
  return {
    type: GET_DEVICE_APP_DATA_REQUEST,
  };
};
