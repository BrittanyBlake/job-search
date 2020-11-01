import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

const JobResults = ({ jobData }) => (
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
        {Parser(jobData.description)}
        {' '}
      </div>

      <div>
        <h3> Ready to Apply?</h3>
        {Parser(jobData.how_to_apply)}
        {' '}
      </div>
    </div>
  </div>
);

export default JobResults;

JobResults.propTypes = {
  jobData: PropTypes.shape({
    company_url: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    how_to_apply: PropTypes.string.isRequired,
  }),
};
JobResults.defaultProps = {
  jobData: [],
};
