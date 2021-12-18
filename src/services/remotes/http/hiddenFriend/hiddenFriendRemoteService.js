import { API_CONSTANTS } from "../../../../utils/constants/apiConstants";
import { httpRequester } from "../httpRequester";

export const getHiddenFriendRemoteService = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.hiddenFriend.getHiddenFriend,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response
}

export const getHiddenFriendDesiresRemoteService = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.hiddenFriend.getHiddenFriendDesires,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response
}