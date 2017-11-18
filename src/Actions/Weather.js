import axios from 'axios';
import { API_KEY } from '../Constants/App';

export function addItems(items) {
  return {
    type: '@WEATHER/ADD_ITEMS',
    payload: items,
  };
}

export function startLoadItems() {
  return {
    type: '@WEATHER/START_LOAD_ITEMS',
  };
}

export function startHidePreloader() {
  return {
    type: '@WEATHER/START_HIDE_PRELOADER',
  };
}

export function loadItemsError() {
  return {
    type: '@WEATHER/LOAD_ITEMS_ERROR',
  };
}

export function loadItems(cityName) {
  return dispatch => {
    dispatch(startLoadItems());

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          API_KEY
        }&units=metric`,
      )
      .then(({ data }) => {
        dispatch(startHidePreloader());

        setTimeout(() => {
          dispatch(addItems(data));
        }, 500);
      })
      .catch(() => {
        dispatch(loadItemsError());
      });
  };
}
