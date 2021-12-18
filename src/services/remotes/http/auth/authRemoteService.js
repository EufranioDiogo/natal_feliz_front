import { API_CONSTANTS } from "../../../../utils/constants/apiConstants";
import { httpRequester } from "../httpRequester";

export const loginRemoteService = async (username, password) => {
  const data = {
    username,
    password
  }

  const response = await httpRequester(
    API_CONSTANTS.auth.login,
    data,
    {},
    'POST'
  )

  return response;
}


export const isAuthenticatedRemoteService = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.auth.auth,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response;
}

export const logoutRemoteService = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.auth.logout,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response;
}