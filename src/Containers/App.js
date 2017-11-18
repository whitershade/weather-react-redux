import { connect } from 'react-redux';
import Component from '../Components/App';
import { loadItems } from '../Actions/Weather';

const mapDispatchToProps = dispatch => ({
  loadWeather: cityName => dispatch(loadItems(cityName)),
});

export default connect(null, mapDispatchToProps)(Component);
