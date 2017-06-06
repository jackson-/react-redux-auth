import agent from '../agent';

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      agent.Auth.login(action.payload.email, action.payload.password).then((results) => {
        localStorage.setItem('token', results.user.token)
        localStorage.setItem('email', results.user.email)
        localStorage.setItem('timestamp', Date.now())
        action.router.push('/')
        return {
          ...state,
          inProgress: false,
          errors: results.error ? results.errors : null
        };
      })

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
    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value };
    case 'ASYNC_START':
      if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
        return { ...state, inProgress: true };
      }
      break;
    default:
      return state;
  }
};
