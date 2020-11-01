const InitialState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const JobListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'JOB_LIST_LOADING':
      return {
        ...state,
        loading: true,
        data: [],
        errorMsg: '',
      };

    case 'JOB_LIST_FAIL':
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: 'Unable to get jobs',
      };

    case 'JOB_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        count: action.payload.length,
        errorMsg: '',
      };
    default:
      return state;
  }
};

export default JobListReducer;
