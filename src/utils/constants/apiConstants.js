const API_BASE_URL = 'http://localhost:3000'

export const API_CONSTANTS = {
  auth: {
    auth: API_BASE_URL + '/auth',
    login: API_BASE_URL + '/auth/login',
    logout: API_BASE_URL + '/auth/logout'
  },
  user: {
    getData: API_BASE_URL + '/user',
    createUser: API_BASE_URL + '/user',
    updateUser: API_BASE_URL + '/user'
  },
  hiddenFriend: {
    getHiddenFriend: API_BASE_URL + '/friend/hidden',
    getHiddenFriendDesires: API_BASE_URL + '/friend/hidden/desires'
  },
  app: {

  }
}