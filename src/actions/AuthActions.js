import { GET_TOKEN_REQUEST } from "../constants/AuthConstants";

export const getToken = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};
