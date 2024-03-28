import { call, put, takeLatest } from "redux-saga/effects";
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
  GET_TICKET_COUNT_REQUEST,
  GET_TICKET_COUNT_SUCCESS,
  GET_TICKET_COUNT_ERROR,
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_ERROR,
  GET_TICKET_TOP_ISSUES_REQUEST,
  GET_TICKET_TOP_ISSUES_SUCCESS,
  GET_TICKET_TOP_ISSUES_ERROR,
  GET_TICKET_LIST_REQUEST,
  GET_TICKET_LIST_SUCCESS,
  GET_TICKET_LIST_ERROR,
  GET_TICKET_DATA_REQUEST,
  GET_TICKET_DATA_SUCCESS,
  GET_TICKET_DATA_ERROR,
} from "../constants/DashboardConstants";
import axios from "axios";
import { headers } from "./GetHeaders";

const API_URL = process.env.REACT_APP_API_URL;

async function getAccess() {
  const data = {
    Access: process.env.REACT_APP_ACCESS,
    ClientId: process.env.REACT_APP_CLIENT_ID,
    Version: process.env.REACT_APP_VERSION,
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
    OTP: process.env.REACT_APP_OTP,
    ClientId: process.env.REACT_APP_CLIENT_ID,
    Version: process.env.REACT_APP_VERSION,
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
    const result = yield call(validateOtp, loginId);
    localStorage.setItem("Ns_t", result.Token);
    localStorage.setItem("userName", result.UserDetails.UserName);
    localStorage.setItem("companyLogo", result.Company.CompanyLogo);
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

function* getDeviceCount(values) {
  try {
    const { token } = values;
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

function* getDeviceData(values) {
  try {
    const { token } = values;
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

function* getDeviceAppData(values) {
  try {
    const { token } = values;
    const data = yield call(getAppData, token);
    yield put({ type: GET_DEVICE_APP_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEVICE_APP_DATA_ERROR, error });
  }
}

async function getTicketCountData(token) {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetTicketWise`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTicketCount(values) {
  try {
    const { token } = values;
    const data = yield call(getTicketCountData, token);
    yield put({ type: GET_TICKET_COUNT_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_TICKET_COUNT_ERROR, error });
  }
}

async function getTicketsData(token) {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetTicket`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTickets(values) {
  try {
    const { token } = values;
    const data = yield call(getTicketsData, token);
    yield put({ type: GET_TICKETS_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_TICKETS_ERROR, error });
  }
}

async function getTicketTopIssuesData(token) {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetTicketTopIssues`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTicketTopIssues(values) {
  try {
    const { token } = values;
    const data = yield call(getTicketTopIssuesData, token);
    yield put({ type: GET_TICKET_TOP_ISSUES_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_TICKET_TOP_ISSUES_ERROR, error });
  }
}

async function getTicketListData(token) {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetTicketList`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTicketList(values) {
  try {
    const { token } = values;
    const data = yield call(getTicketListData, token);
    yield put({ type: GET_TICKET_LIST_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_TICKET_LIST_ERROR, error });
  }
}

async function getListData(token) {
  headers["ns_t"] = token;
  return await axios({
    method: "post",
    url: `${API_URL}/Api/DashboardApi/GetTicketData`,
    headers: headers,
  })
    .then((response) => response.data.Data)
    .catch((error) => {
      throw error;
    });
}

function* getTicketData(values) {
  try {
    const { token } = values;
    const data = yield call(getListData, token);
    yield put({ type: GET_TICKET_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_TICKET_DATA_ERROR, error });
  }
}

export default () => {
  function* watcher() {
    yield takeLatest(GET_TOKEN_REQUEST, getTokenAPI);
    yield takeLatest(GET_DEVICE_COUNT_REQUEST, getDeviceCount);
    yield takeLatest(GET_DEVICE_DATA_REQUEST, getDeviceData);
    yield takeLatest(GET_DEVICE_APP_DATA_REQUEST, getDeviceAppData);
    yield takeLatest(GET_TICKET_COUNT_REQUEST, getTicketCount);
    yield takeLatest(GET_TICKETS_REQUEST, getTickets);
    yield takeLatest(GET_TICKET_TOP_ISSUES_REQUEST, getTicketTopIssues);
    yield takeLatest(GET_TICKET_LIST_REQUEST, getTicketList);
    yield takeLatest(GET_TICKET_DATA_REQUEST, getTicketData);
  }
  return { watcher };
};
