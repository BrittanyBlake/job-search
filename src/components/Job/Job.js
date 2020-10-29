import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { GetJob } from '../../redux/actions/JobActions';

const Job = ({ match }) => {
  const jobId = match.params.job;
  const dispatch = useDispatch();
  const jobState = useSelector(state => state.Job);

  React.useEffect(() => {
    dispatch(GetJob(jobId));
  }, []);

  console.log(jobState);

  const ShowData = () => {
    if (!_.isEmpty(jobState.data[jobId])) {
      const jobData = jobState.data[jobId];
      return (
        <div>
          <div>
            <a href={jobData.company_url}>
              <img
                src={jobData.company_logo}
                style={{ maxHeight: 200, maxwidth: 1000 }}
                alt={jobData.company}
              />
              <h1 className="black-text">
                {' '}
                {jobData.company}
              </h1>
            </a>

            <h3>
              {' '}
              {jobData.type}
            </h3>
            <h3>
              {' '}
              {jobData.title}
            </h3>

            <h2>
              {' '}
              Location:
              {jobData.location}
            </h2>
            <small>
              {' '}
              Posted on
              {' '}
              {new Date(jobData.created_at).toLocaleDateString()}
            </small>

            <div>
              {' '}
              <p>
                {Parser(jobData.description)}
                {' '}
              </p>
            </div>

            <div>
              <h3> Ready to Apply?</h3>
              <p>
                {Parser(jobData.how_to_apply)}
                {' '}
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (jobState.loading) {
      return <p> Loading...</p>;
    }

    if (jobState.errorMsg !== '') {
      return (
        <p>
          {' '}
          {jobState.errorMsg}
        </p>
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
