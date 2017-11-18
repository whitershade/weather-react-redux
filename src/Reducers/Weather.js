const initialState = {
  data: [],
  isLoading: false,
  isPreloaderHidding: false,
};

const Weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@WEATHER/START_LOAD_ITEMS':
      return Object.assign({}, state, {
        isLoading: true,
        isPreloaderHidding: false,
      });

    case '@WEATHER/LOAD_ITEMS_ERROR':
      return Object.assign({}, state, {
        isLoading: false,
      });

    case '@WEATHER/START_HIDE_PRELOADER':
      return Object.assign({}, state, {
        isPreloaderHidding: true,
      });

    case '@WEATHER/ADD_ITEMS':
      return Object.assign({}, state, {
        data: [...state.data, payload],
        isLoading: false,
      });

    default:
      return state;
  }
};

export default Weather;
