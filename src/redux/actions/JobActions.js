import axios from 'axios';

export const JobListLoading = () => ({
  type: 'JOB_LIST_LOADING',
});

export const JobListSuccess = jobs => ({
  type: 'JOB_LIST_SUCCESS',
  payload: jobs,
});
export const JobListFailure = error => ({
  type: 'JOB_LIST_FAIL',
  payload: error,
});

export const GetJobList = () => async dispatch => {
  try {
    dispatch(JobListLoading());

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://jobs.github.com/positions.json?';

    const result = await axios.get(proxyUrl + targetUrl);
    const jobs = result.data;
    dispatch(JobListSuccess(jobs));
  } catch (e) {
    dispatch(JobListFailure(e));
  }
};

export const GetJob = job => async dispatch => {
  try {
    dispatch({
      type: 'JOB_LOADING',
    });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://jobs.github.com/positions/${job}.json?`;

    const result = await axios.get(proxyUrl + targetUrl);

    dispatch({
      type: 'JOB_SUCCESS',
      payload: result.data,
      jobId: job,
    });
  } catch (e) {
    dispatch({
      type: 'JOB_FAIL',
    });
  }
};
