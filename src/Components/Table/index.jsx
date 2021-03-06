import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import TableRow from './TableRow';
import Preloader from '../Preloader';

const StyledThead = styled.thead`
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
`;

const StyledTh = styled.th`
  width: 25%;
  min-width: 25%;
  max-width: 25%;
`;

const Table = ({ weatherData, isLoading, isPreloaderHidding }) => (
  <div>
    <table>
      {!isEmpty(weatherData) ? (
        <StyledThead>
          <tr>
            <StyledTh>City</StyledTh>
            <StyledTh>Temperature</StyledTh>
            <StyledTh>Pressure</StyledTh>
            <StyledTh>Humidity</StyledTh>
          </tr>
        </StyledThead>
      ) : null}

      <tbody>
        {weatherData.map(({ city, list }) => (
          <TableRow key={city.id} city={city} weatherList={list} />
        ))}
      </tbody>
    </table>
    {isLoading ? <Preloader isPreloaderHidding={isPreloaderHidding} /> : null}
  </div>
);

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPreloaderHidding: PropTypes.bool.isRequired,
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
