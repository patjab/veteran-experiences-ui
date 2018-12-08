const initialState = {
  currentUser: {},
  loggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
    console.log(action.payload)
      return {...state, currentUser: action.payload, loggedIn: false}
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload, loggedIn: true, loading: false}
    case 'LOGOUT_USER':
      return {...state, currentUser: {}}
    default:
      return state;
  }
}

export default userReducer
