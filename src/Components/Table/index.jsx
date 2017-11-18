import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import TableRow from './TableRow';

const StyledTable = styled.table``;

const Table = ({ weatherData }) =>
  !isEmpty(weatherData) ? (
    <StyledTable>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map(({ city, list }) => (
          <TableRow key={city.id} city={city} weatherList={list} />
        ))}
      </tbody>
    </StyledTable>
  ) : null;

Table.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
