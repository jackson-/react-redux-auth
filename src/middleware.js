const promiseMiddleware = store => next => action => {
  console.log("MIDDLEWARE")
  if (isPromise(action.payload)) {
    action.payload.then(
      res => {
        action.payload = res;
        console.log("GOT IT", res, action)
        store.dispatch(action);
      },
      error => {
        action.error = true;
        action.payload = error.response.body;
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export {
  promiseMiddleware
};
