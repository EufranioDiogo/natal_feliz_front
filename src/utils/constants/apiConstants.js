const API_BASE_URL = 'http://localhost:3002'
const API_BASE_URL_BUILD = 'https://natal-feliz-back.herokuapp.com'

export const API_CONSTANTS = {
  auth: {
    auth: API_BASE_URL_BUILD + '/auth',
    login: API_BASE_URL_BUILD + '/auth/login',
    logout: API_BASE_URL_BUILD + '/auth/logout'
  },
  user: {
    getData: API_BASE_URL_BUILD + '/user',
    createUser: API_BASE_URL_BUILD + '/user',
    updateUser: API_BASE_URL_BUILD + '/user'
  },
  hiddenFriend: {
    getHiddenFriend: API_BASE_URL_BUILD + '/friend/hidden',
    getHiddenFriendDesires: API_BASE_URL_BUILD + '/friend/hidden/desires'
  },
  app: {
    statistics: API_BASE_URL_BUILD + '/app/statistics',
  }
}