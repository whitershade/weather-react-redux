/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';
import SearchBar from '../Containers/SearchBar';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  padding: 15px;
`;

export default class App extends PureComponent {
  render() {
    return (
      <StyledApp>
        <SearchBar />
      </StyledApp>
    );
  }
}

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
