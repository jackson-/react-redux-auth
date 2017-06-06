import agent from '../agent';

const defaultState = {
  projects: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
        return {
          ...state,
          projects:action.data
        }
    default:
      return state;
  }
};
