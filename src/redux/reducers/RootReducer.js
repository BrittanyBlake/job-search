import { combineReducers } from 'redux';
import JobListReducer from './JobListReducer';
import JobReducer from './JobReducer';

const RootReducer = combineReducers({
  JobList: JobListReducer,
  Job: JobReducer,
});

export default RootReducer;
