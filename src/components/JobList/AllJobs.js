import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import useStyles from './JobCard.styles';
import SmallChips from '../chip/Chip';

const AllJobs = ({ jobList }) => {
  const classes = useStyles();
  if (!jobList) {
    return null;
  }
  return (
    <div id="list">
      <h1>
        Showing
        {jobList.data.length}
        {' '}
        Jobs on this page
      </h1>
      <Grid container spacing={3} direction="row">
        {jobList.data.map(job => (
          <Grid item key={job.id} xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={job.company}
                  height="250"
                  width="500"
                  image={
                    job.company_logo
                      ? job.company_logo
                      : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
                  }
                  title={job.title}
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" noWrap>
                    {job.title}
                    <SmallChips props={job.type} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'center' }}>
                {/* <Button size="small" color="primary">
                  Apply
                </Button> */}
                <Button size="small" color="primary">
                  <Link to={`/job/${job.id}`}> Learn More </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllJobs;

AllJobs.propTypes = {
  jobList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

AllJobs.defaultProps = {
  jobList: [],
};
