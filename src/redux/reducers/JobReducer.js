const InitialState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const JobReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'JOB_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'JOB_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to find job',
      };
    case 'JOB_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.jobId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default JobReducer;
