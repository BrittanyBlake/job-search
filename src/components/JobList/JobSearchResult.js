import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SmallChips from './chip/Chip';

import useStyles from './JobCard.styles';

const JobSearchResult = ({ search }) => {
  const classes = useStyles();
  if (!search) {
    return null;
  }
  return (
    <div id="list">
      <h1>
        Showing
        {search.length}
        {' '}
        Jobs on this page
      </h1>
      <Grid container spacing={3} direction="row">
        {search.map(searchItem => (
          <Grid item key={searchItem.id} xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={searchItem.company}
                  height="250"
                  width="500"
                  image={
                    searchItem.company_logo
                      ? searchItem.company_logo
                      : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
                  }
                  title={searchItem.title}
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {searchItem.title}
                    <SmallChips props={searchItem.type} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Apply
                </Button>
                <Button size="small" color="primary">
                  <Link to={`/job/${searchItem.id}`}> Learn More </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobSearchResult;

JobSearchResult.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      0: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.string,
          backdrop_path: PropTypes.string,
          name: PropTypes.string,
        }),
      ),
    }),
  ),
};

JobSearchResult.defaultProps = {
  search: [],
};
