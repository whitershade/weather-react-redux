/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'papercss/dist/paper.min.css';
import styled, { injectGlobal } from 'styled-components';
import SearchBar from '../Containers/SearchBar';
import Table from '../Containers/Table';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  max-width: 800px;
  padding: 0 15px;

  margin: 0 auto;
`;

export default class App extends PureComponent {
  componentDidMount() {
    this.props.loadWeather('Odessa');
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <Table />
      </Container>
    );
  }
}

App.propTypes = {
  loadWeather: PropTypes.func.isRequired,
};

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
