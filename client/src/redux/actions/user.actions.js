import { SET_USER, DELL_USER } from '../types/user.types'


export const setUser = (user) => ({ // action creater
  type: SET_USER,
  payload: user 
})

export const signUp = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await fetch('http://localhost:3001/api/v1/auth/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
    
  } else {
    
  }

}

export const signIn = (payload) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/auth/signin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
      })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  } else {
    
  }
  
}




export const checkAuth = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/auth/check', {
    credentials: 'include'
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  }
}

export const deleteUser = () => ({
  type: DELL_USER
})

export const signOut = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/auth/signout', {
    credentials: 'include'
  })
  if (response.status === 200) {
    dispatch(deleteUser())
    // setTimeout(()=>{
      
    // }, 2000  )
  }
} 

