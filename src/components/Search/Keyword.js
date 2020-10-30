import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import useStyles from './Keyword.styles';

const Keyword = ({ props, func }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-search"
          label={props}
          type="search"
          variant="outlined"
          onChange={func}
          style={{ width: 325 }}
        />
      </div>
    </form>
  );
};

export default Keyword;

Keyword.propTypes = {
  props: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
