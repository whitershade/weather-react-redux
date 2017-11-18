/* eslint-disable no-unused-expressions */
import React from 'react';
import 'papercss/dist/paper.min.css';
import styled, { injectGlobal } from 'styled-components';
import SearchBar from '../Containers/SearchBar';
import Table from '../Containers/Table';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }

  table {
    width: auto;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 0 15px;

  margin: 0 auto;
`;

const App = () => (
  <Container>
    <SearchBar />
    <Table />
  </Container>
);

export default App;

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
