const initialState = {
  jobs: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS_ARRAY":
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};

export default queryReducer;
