import axios from 'axios';
import { API_KEY } from '../Constants/App';

export function addItems(items) {
  return {
    type: '@WEATHER/ADD_ITEMS',
    payload: items,
  };
}

export function loadItems(cityName) {
  return dispatch => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          API_KEY
        }`,
      )
      .then(({ data }) => {
        dispatch(addItems(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
