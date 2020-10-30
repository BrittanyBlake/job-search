import JobListReducer from '../../redux/reducers/JobListReducer';
import * as reducerAction from '../../redux/actions/JobActions';

describe('get Job List', () => {
  const initialState = {
    loading: false,
    data: [],
    errorMsg: '',
  };

  it('should return the initial state', () => {
    expect(
      JobListReducer(undefined, {
        type: reducerAction.GetJobList,
      }),
    ).toEqual(initialState);
  });
});
