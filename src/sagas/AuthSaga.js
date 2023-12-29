import { call, put, takeLatest } from "redux-saga/effects";
// import { history } from '../_helpers'
import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
} from "../constants/AuthConstants";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
  X_client_brow: "Chrome",
  X_client_brow_ver: "120.0.6099.129",
  X_client_mobi: true,
  X_client_usod: "Windows",
  X_client_usod_ver: 11,
  X_client_data_size: "1536 x 864",
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
    console.log("loginId", loginId);
    console.log("OtpData", OtpData);
    localStorage.setItem("Ns_t", OtpData.Token);
    const msg = "Token Saved";
    yield put({ type: GET_TOKEN_SUCCESS, msg });
  } catch (error) {
    yield put({ type: GET_TOKEN_ERROR, error });
  }
}

export default () => {
  function* watcher() {
    yield takeLatest(GET_TOKEN_REQUEST, getTokenAPI);
  }
  return { watcher };
};
