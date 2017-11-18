import React from 'react';
import { sum, round } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

const StyledTr = styled.tr`
  animation: fadeIn;
  animation-duration: 0.3s;
`;

const StyledTd = styled.td`
  width: 25%;
  max-width: 25%;
  min-width: 25%;
`;

const getAverageValueOfArray = array => round(sum(array) / array.length);

const TableRow = ({ city: { coord: { lat, lon } }, weatherList }) => {
  const weatherMain = weatherList.map(({ main }) => main);

  const temperatures = weatherMain.map(({ temp }) => temp);
  const pressures = weatherMain.map(({ pressure }) => pressure);
  const humidities = weatherMain.map(({ humidity }) => humidity);

  return (
    <StyledTr>
      <StyledTd>
        <GoogleMap lat={lat} lng={lon} />
      </StyledTd>
      <StyledTd>
        <Chart
          label="&nbsp;°C"
          color="green"
          data={temperatures}
          average={getAverageValueOfArray(temperatures)}
        />
      </StyledTd>
      <StyledTd>
        <Chart
          label="&nbsp;hPA"
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
    </StyledTr>
  );
};

TableRow.propTypes = {
  city: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  ).isRequired,
  weatherList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableRow;
