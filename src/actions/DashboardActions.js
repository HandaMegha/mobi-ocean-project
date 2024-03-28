import {
  GET_TOKEN_REQUEST,
  GET_DEVICE_COUNT_REQUEST,
  GET_DEVICE_DATA_REQUEST,
  GET_DEVICE_APP_DATA_REQUEST,
  GET_TICKET_COUNT_REQUEST,
  GET_TICKETS_REQUEST,
  GET_TICKET_TOP_ISSUES_REQUEST,
  GET_TICKET_LIST_REQUEST,
  GET_TICKET_DATA_REQUEST,
  SAVE_STATE,
} from "../constants/DashboardConstants";

export const getToken = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};

export const getDeviceWiseCount = (token) => {
  return {
    type: GET_DEVICE_COUNT_REQUEST,
    token,
  };
};

export const getDeviceData = (token) => {
  return {
    type: GET_DEVICE_DATA_REQUEST,
    token,
  };
};

export const getDeviceAppData = (token) => {
  return {
    type: GET_DEVICE_APP_DATA_REQUEST,
    token,
  };
};

export const getTicketWiseCount = (token) => {
  return {
    type: GET_TICKET_COUNT_REQUEST,
    token,
  };
};

export const getTickets = (token) => {
  return {
    type: GET_TICKETS_REQUEST,
    token,
  };
};

export const getTicketTopIssues = (token) => {
  return {
    type: GET_TICKET_TOP_ISSUES_REQUEST,
    token,
  };
};

export const getTicketList = (token) => {
  return {
    type: GET_TICKET_LIST_REQUEST,
    token,
  };
};

export const getTicketData = (token) => {
  return {
    type: GET_TICKET_DATA_REQUEST,
    token,
  };
};

export const saveStateValue = (val) => {
  return {
    type: SAVE_STATE,
    val,
  };
};
