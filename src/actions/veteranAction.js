const loginUser = (veteran) => {
  return {type: 'LOGIN_USER', payload: veteran}
}

const signupUser = (veteran) => {
  return {type: 'SIGNUP_USER', payload: veteran}
}

export function handleSignUp(values) {
  return dispatch => {
    return fetch("http://localhost:3000/veterans", {
       method: 'POST',
       body: JSON.stringify(values),
       headers: {
         "Content-Type": "application/json",
         'Accept': 'application/json'
       }
     })
     .then(res => res.json())
     .then(user => {
       if (user.error) {
         alert('Wrong Information')
         throw new Error ('log in error')
       } else {
         return dispatch(signupUser(user))
     }
   })
 }
}

export function handleLogin(id) {
  return dispatch => {
    return fetch(`http://localhost:3000/veterans/${id}`, {
       headers: {"Content-Type": "application/json"}
     })
     .then(res => res.json())
     .then(user => {
       if (user.error) {
         alert('Wrong Information')
         throw new Error ('log in error')
       } else {
       return dispatch(loginUser(user))
     }
   })
 }
}

export const logoutUser = () => {
  return dispatch => dispatch({ type: 'LOGOUT_USER' })
}
