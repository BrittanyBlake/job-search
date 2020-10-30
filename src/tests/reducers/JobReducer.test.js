import JobReducer from '../../redux/reducers/JobReducer';
import * as reducerAction from '../../redux/actions/JobActions';

describe('Get Job ', () => {
  const initialState = {
    loading: false,
    data: {},
    errorMsg: '',
  };

  it('should return the initial state', () => {
    expect(
      JobReducer(undefined, {
        type: reducerAction.GetJob,
      }),
    ).toEqual(initialState);
  });
});
