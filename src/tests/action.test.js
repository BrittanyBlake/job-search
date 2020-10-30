import * as reducerAction from '../redux/actions/JobActions';

describe('Get Job List', () => {
  const parameter = 'jobs';
  const error = 'error';
  it('should create an action to get load info', () => {
    const expectedAction = {
      type: 'JOB_LIST_LOADING',
    };
    expect(reducerAction.JobListLoading()).toEqual(expectedAction);
  });

  it('should create an action to fetch the list of movies', () => {
    const expectedAction = {
      type: 'JOB_LIST_SUCCESS',
      payload: parameter,
    };
    expect(reducerAction.JobListSuccess(parameter)).toEqual(expectedAction);
  });

  it('should create an action to fetch an error message', () => {
    const expectedAction = {
      type: 'JOB_LIST_FAIL',
      payload: error,
    };
    expect(reducerAction.JobListFailure(error)).toEqual(expectedAction);
  });
});
