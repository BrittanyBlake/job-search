import React from 'react';
import './App.css';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import Job from './components/Job/Job';
import JobList from './components/JobList/JobList';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          {' '}
          <Nav />
          {' '}
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={JobList} />
        <Route path="/job/:job" exact component={Job} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
