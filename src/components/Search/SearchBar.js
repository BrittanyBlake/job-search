import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Keyword from './Keyword';
import useStyles from './SearchBar.styles';

function SearchBar({ handleDescSearch, handleLocSearch }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Keyword props="description" func={handleDescSearch} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Keyword props="location" func={handleLocSearch} />
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default SearchBar;

SearchBar.propTypes = {
  handleDescSearch: PropTypes.func,
  handleLocSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  handleDescSearch: () => {},
  handleLocSearch: () => {},
};
