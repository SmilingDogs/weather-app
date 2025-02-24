export const initialState = {
  weatherData: null,
  forecastData: null,
  isShowSearch: true,
  error: null,
  isLoading: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_WEATHER_DATA":
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        isShowSearch: false,
      };
    case "SET_FORECAST_DATA":
      return {
        ...state,
        forecastData: action.payload,
        isLoading: false,
        isShowSearch: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isShowSearch: false,
      };
    case "SET_LOADING":
      return { ...state, isLoading: true, error: null, isShowSearch: false };
    default:
      return state;
  }
}
