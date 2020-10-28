import axios from 'axios';

export const GetJobList = () => async dispatch => {
  try {
    dispatch({
      type: 'JOB_LIST_LOADING',
    });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://jobs.github.com/positions.json?';

    const result = await axios.get(proxyUrl + targetUrl);

    dispatch({
      type: 'JOB_LIST_SUCCESS',
      payload: result.data,
    });
  } catch (e) {
    dispatch({
      type: 'JOB_LIST_FAIL',
    });
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
