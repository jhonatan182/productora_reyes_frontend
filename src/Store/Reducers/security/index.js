const defaultValue = JSON.parse(localStorage.getItem('auth')) || {
    user: null,
    isLoading: false,
    token: null,
    error: null,
  }
  
  const reducer = (state = defaultValue, action = { type: "NONE", payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case "LOGIN_LOADING":
        return {
          ...state,
          isLoading: true
        }
      case "LOGIN_SUCCESS":
        // TODO: add user data in endpoint and assign to user
        const newState = {
          ...state,
          isLoading: false,
          token: payload.token,
        }
        localStorage.setItem('auth', JSON.stringify(newState));
        return newState;
      case "LOGIN_FAILED":
        return {
          ...state,
          isLoading: false,
          token: null,
          error: payload
        }
      case "LOGIN_CLEAN_ERROR":
        return {
          ...state,
          error: null
        }
      case "LOGIN_SIGNOUT":
        localStorage.removeItem('auth');
        return {
          user: null,
          isLoading: false,
          token: null,
          error: null
        }
      default: return state;
    }
  }
  
  export default reducer;
  