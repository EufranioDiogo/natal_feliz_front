import { API_CONSTANTS } from "../../../../utils/constants/apiConstants";
import { httpRequester } from "../httpRequester";

export const createUserRemoteService = async (username, password) => {
  const data = {
    username,
    password
  }

  const response = await httpRequester(
    API_CONSTANTS.user.createUser,
    data,
    {},
    'POST'
  )

  return response
}

export const getUserDataRemoteService = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.user.getData,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response
}

export const updateUserRemoteService = async (auxData, token) => {
  const response = await httpRequester(
    API_CONSTANTS.user.updateUser,
    auxData,
    {
      'Authorization': token
    },
    'PUT'
  )

  return response
}