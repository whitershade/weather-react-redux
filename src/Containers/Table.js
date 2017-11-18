import { connect } from 'react-redux';
import Component from '../Components/Table';

function mapStateToProps(state) {
  return {
    weatherData: state.weather.data,
  };
}

export default connect(mapStateToProps)(Component);
