import React from 'react';
import { sum, round } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

const StyledTd = styled.td`
  width: 200px;
  height: 200px;
`;

const getAverageValueOfArray = array => round(sum(array) / array.length);

const TableRow = ({ city: { coord: { lat, lon } }, weatherList }) => {
  const weatherMain = weatherList.map(({ main }) => main);

  const temperatures = weatherMain.map(({ temp }) => temp);
  const pressures = weatherMain.map(({ pressure }) => pressure);
  const humidities = weatherMain.map(({ humidity }) => humidity);

  return (
    <tr>
      <StyledTd>
        <GoogleMap lat={lat} lng={lon} />
      </StyledTd>
      <StyledTd>
        <Chart
          label="K"
          color="green"
          data={temperatures}
          average={getAverageValueOfArray(temperatures)}
        />
      </StyledTd>
      <StyledTd>
        <Chart
          label="hPA"
          color="brown"
          data={pressures}
          average={getAverageValueOfArray(pressures)}
        />
      </StyledTd>
      <StyledTd>
        <Chart
          label="%"
          color="blue"
          data={humidities}
          average={getAverageValueOfArray(humidities)}
        />
      </StyledTd>
    </tr>
  );
};

TableRow.propTypes = {
  city: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  ).isRequired,
  weatherList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableRow;
