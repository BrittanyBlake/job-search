import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './JobCard.styles';
import { GetJobList } from '../../redux/actions/JobActions';
import SmallChips from './chip/Chip';
import Loading from './loading/Loading';

const JobList = () => {
  const dispatch = useDispatch();
  const jobList = useSelector(state => state.JobList);
  const classes = useStyles();
  const [search, setSearch] = useState([]);

  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearch = e => {
    if (e.target.value === '') {
      setSearch([]);
      setSearchActive(false);
      return;
    }
    setSearchActive(true);
    setSearch(
      jobList.data.filter(jobFilter => {
        //  console.log(e.target.value)
        //  console.log(jobFilter.description.includes(e.target.value));
        const jobItem = jobFilter.description || jobFilter.location;
        return jobItem.toLowerCase().includes(e.target.value.toLowerCase());
      }),
    );
  };

  const FetchData = page => {
    dispatch(GetJobList(page));
  };
  console.log('job:', jobList.data);

  console.log('search', search);
  React.useEffect(() => {
    FetchData(2);
  }, []);

  const ShowData = () => {
    if (jobList.loading) {
      return (
        <div>
          <h1> Loading...</h1>
          <Loading />
        </div>

      );
    }

    if (isSearchActive) {
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
    }

    if (!_.isEmpty(jobList.data)) {
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
                      <Typography gutterBottom variant="h6" component="h2">
                        {job.title}
                        <SmallChips props={job.type} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Apply
                    </Button>
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
    }

    if (jobList.errorMsg !== '') {
      return (
        <p>
          {' '}
          {jobList.errorMsg}
        </p>
      );
    }

    return <p> unable to get data</p>;
  };

  return (
    <div>
      <input type="text" placeholder="description" onChange={handleSearch} />
      <input type="text" placeholder="location" onChange={handleSearch} />

      <CssBaseline />
      <Container>
        {ShowData()}
      </Container>
    </div>
  );
};

export default JobList;
