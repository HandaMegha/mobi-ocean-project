import { call, put, takeLatest } from "redux-saga/effects";
// import { history } from '../_helpers';
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
import axios from "axios";
import { headers, token } from "./GetHeaders";

const API_URL = process.env.REACT_APP_API_URL;

async function getAccess() {
  const data = {
    // Access: "mmeghahanda1996@gmail.com",
    ClientId: "NRP01SE",
    Version: "0.0.1",
  };

  return await axios({
    method: "post",
    url: `${API_URL}/Api/GeneralApi/GetAccess`,
    data: data,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

async function validateOtp(loginId) {
  const data = {
    LoginId: loginId,
    OTP: "7070baed1f0e21d1234a4b00082a1bea",
    ClientId: "NRP01SE",
    Version: "0.0.1",
  };

  return await axios({
    method: "post",
    url: `${API_URL}/Api/GeneralApi/ValidateOtp`,
    data: data,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTokenAPI() {
  try {
    const loginId = yield call(getAccess);
    const OtpData = yield call(validateOtp, loginId);
    localStorage.setItem("Ns_t", OtpData.Token);
    const msg = "Token Saved";
    yield put({ type: GET_TOKEN_SUCCESS, msg });
  } catch (error) {
    yield put({ type: GET_TOKEN_ERROR, error });
  }
}

async function getDeviceCountData() {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetDeviceWise`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getDeviceCount() {
  try {
    const data = yield call(getDeviceCountData);
    yield put({ type: GET_DEVICE_COUNT_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_COUNT_ERROR, error });
  }
}

async function getData() {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetDevices`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getDeviceData() {
  try {
    const data = yield call(getData);
    yield put({ type: GET_DEVICE_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_DATA_ERROR, error });
  }
}

async function getAppData() {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetDeviceApp`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getDeviceAppData() {
  try {
    const data = yield call(getAppData);
    yield put({ type: GET_DEVICE_APP_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_APP_DATA_ERROR, error });
  }
}

export default () => {
  function* watcher() {
    yield takeLatest(GET_TOKEN_REQUEST, getTokenAPI);
    yield takeLatest(GET_DEVICE_COUNT_REQUEST, getDeviceCount);
    yield takeLatest(GET_DEVICE_DATA_REQUEST, getDeviceData);
    yield takeLatest(GET_DEVICE_APP_DATA_REQUEST, getDeviceAppData);
  }
  return { watcher };
};