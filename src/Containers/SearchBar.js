import { connect } from 'react-redux';
import Component from '../Components/SearchBar';
import { loadItems } from '../Actions/Weather';

function mapStateToProps(state) {
  return {
    isLoading: state.weather.isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  loadWeather: cityName => dispatch(loadItems(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
