export default (state = {}, action) => {
  console.log("Auth Reducer", action.type)
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.user.token)
      localStorage.setItem('email', action.payload.user.email)
      localStorage.setItem('timestamp', Date.now())
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case 'REGISTER':
      localStorage.setItem('token', action.payload.user.token)
      localStorage.setItem('email', action.payload.user.email)
      localStorage.setItem('timestamp', Date.now())
      return {
        ...state,
        email:action.payload.user.email,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case 'ASYNC_START':
      if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
        return { ...state, inProgress: true };
      }
      break;
    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value };
  }

  return state;
};
