export default (state = {}, action) => {
  switch (action.type) {
    case 'PROJECTS_PAGE_LOADED':
      return {
        ...state,
        projects: action.payload.projects
      };
  }

  return state;
};
