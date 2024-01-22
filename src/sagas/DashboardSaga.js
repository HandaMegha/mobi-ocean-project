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

const API_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
  X_client_brow: "Chrome",
  X_client_brow_ver: "120.0.6099.129",
  X_client_mobi: 0,
  X_client_usod: "Windows",
  X_client_usod_ver: 11,
  X_client_data_size: "1536 x 864",
  refere: "https://mis.mobiocean.in",
};

async function getAccess() {
  const data = {
    Access: "0440narayanan.s@mobiocean.in",
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
    OTP: "05dc4be3550a5f2ec6bdb5e3a2fc5059",
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

async function getDeviceCountData(token) {
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
    const token = localStorage.getItem("Ns_t");
    const data = yield call(getDeviceCountData, token);
    yield put({ type: GET_DEVICE_COUNT_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_COUNT_ERROR, error });
  }
}

async function getData(token) {
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
    const token = localStorage.getItem("Ns_t");
    const data = yield call(getData, token);
    yield put({ type: GET_DEVICE_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_DATA_ERROR, error });
  }
}

async function getAppData(token) {
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
    const token = localStorage.getItem("Ns_t");
    const data = yield call(getAppData, token);
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
