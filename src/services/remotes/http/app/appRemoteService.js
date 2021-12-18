import { API_CONSTANTS } from "../../../../utils/constants/apiConstants";
import { httpRequester } from "../httpRequester";

export const getStatistics = async (token) => {
  const response = await httpRequester(
    API_CONSTANTS.app.statistics,
    undefined,
    {
      'Authorization': token
    },
    'GET'
  )

  return response
}
