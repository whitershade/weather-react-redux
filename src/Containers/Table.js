import { connect } from 'react-redux';
import Component from '../Components/Table';

function mapStateToProps(state) {
  return {
    weatherData: state.weather.data,
    isLoading: state.weather.isLoading,
    isPreloaderHidding: state.weather.isPreloaderHidding,
  };
}

export default connect(mapStateToProps)(Component);
