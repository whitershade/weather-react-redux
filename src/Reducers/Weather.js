const initialState = {
  data: [],
  isLoading: false,
};

const Weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@WEATHER/ADD_ITEMS':
      return Object.assign({}, state, { data: [...state.data, payload] });

    default:
      return state;
  }
};

export default Weather;
