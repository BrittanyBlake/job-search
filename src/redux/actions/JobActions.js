import axios from "axios";

export const GetJobList = () => async (dispatch) => {
  try {
    dispatch({
      type: "JOB_LIST_LOADING",
    });

    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = `https://jobs.github.com/positions.json?`;

    const result = await axios.get(proxyUrl + targetUrl);

    dispatch({
      type: "JOB_LIST_SUCCESS",
      payload: result.data,
    });
  } catch (e) {
    dispatch({
      type: "JOB_LIST_FAIL",
    });
  }
};
