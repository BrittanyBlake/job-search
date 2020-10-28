import { combineReducers } from 'redux';
import JobListReducer from './JobListReducer'

const RootReducer = combineReducers({
  JobList: JobListReducer,
});

export default RootReducer;
