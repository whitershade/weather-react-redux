import React from 'react';
import { isNull } from 'lodash';
import PropTypes from 'prop-types';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Chart = ({ data, color, average, label }) => (
  <div>
    <Sparklines data={data} limit={10} width={200} height={200} margin={5}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    {!isNull(average) ? (
      <div>
        {average}
        {label}
      </div>
    ) : null}
  </div>
);

Chart.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  average: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Chart.defaultProps = {
  label: '',
  color: 'blue',
  average: null,
};

export default Chart;
