import { useReducer, useCallback } from "react";
import config from "../../config"; //* this is the config file with the API key
import { initialState, reducer } from "../reducers/weatherReducer";

function useWeatherData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getWeatherData = useCallback(async (endPoint, city) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const apiURL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${config.apiKey}&units=metric`;
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.cod == 200) {
        //prettier-ignore
        dispatch({ type: endPoint === "weather" ? "SET_WEATHER_DATA" : "SET_FORECAST_DATA", payload: data,
        });
      } else {
        dispatch({ type: "SET_ERROR", payload: data.message });
      }
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: "Failed to fetch data. Error details: " + err.message,
      });
    }
  }, []);

  return [
    state.weatherData,
    state.forecastData,
    state.isShowSearch,
    state.error,
    state.isLoading,
    getWeatherData,
  ];
}

export default useWeatherData;
