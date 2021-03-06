import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Home from './Home';
import Contacts from './Contacts';
import Resume from './Resume';

function App({ data }) {
  return (
    <Router>
      <div>
        <Header />
        <Route
          exact
          path="/"
          render={() => <Home {...data.home} />}
        />
        <Route
          path="/resume"
          render={() => <Resume data={data.resume} />}
        />
        <Route
          path="/contact"
          render={() => <Contacts data={data.contacts} />}
        />
      </div>
    </Router>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    resume: PropTypes.array,
  }),
};

App.defaultProps = {
  data: {},
};

export default App;
