import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { GetJob } from '../redux/actions/JobActions';
import Loading from '../components/loading/Loading';
import JobResults from '../components/Job/JobResults';

const Job = ({ match }) => {
  const jobId = match.params.job;
  const dispatch = useDispatch();
  const jobState = useSelector(state => state.Job);

  React.useEffect(() => {
    dispatch(GetJob(jobId));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(jobState.data[jobId])) {
      const jobData = jobState.data[jobId];
      return <JobResults jobData={jobData} />;
    }

    if (jobState.loading) {
      return (
        <div>
          <h1> Loading...</h1>
          <Loading />
        </div>
      );
    }

    if (jobState.errorMsg !== '') {
      return (
        <h1>
          {' '}
          {jobState.errorMsg}
        </h1>
      );
    }

    return <p> Unable to get job data</p>;
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper id="job-container" elevation={3}>
          {ShowData()}
        </Paper>
      </Container>
    </div>
  );
};

export default Job;

Job.propTypes = {

  match: PropTypes.shape({
    params: PropTypes.shape({
      job: PropTypes.string.isRequired,
    }),
  }),
};

Job.defaultProps = {
  match: () => {},
};
