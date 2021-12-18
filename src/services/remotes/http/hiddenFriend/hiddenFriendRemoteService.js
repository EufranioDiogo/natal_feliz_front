import { API_CONSTANTS } from "../../../../utils/constants/apiConstants";
import { httpRequester } from "../httpRequester";

export const getHiddenFriendRemoteService = async (token) => {
  const data = {
    token
  }

  const response = await httpRequester(
    API_CONSTANTS.hiddenFriend.getHiddenFriend,
    data,
    {},
    'GET'
  )

  return response
}

export const getHiddenFriendDesiresRemoteService = async (token) => {
  const data = {
    token
  }

  const response = await httpRequester(
    API_CONSTANTS.hiddenFriend.getHiddenFriendDesires,
    data,
    {},
    'GET'
  )

  return response
}