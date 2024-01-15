const initialState = {
  jobs: {
    content: [],
  },
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS_ARRAY":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default queryReducer;
