import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SearchCity from "./components/SearchCity/SearchCity";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Container from "./components/Container/Container";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const [weatherData, forecastData, isShowSearch, error, getWeatherData] =
    useWeatherData();

  return (
    <Container>
      <Header getWeatherData={getWeatherData} />
      <WeatherInfo
        weatherData={weatherData}
        forecastData={forecastData}
        error={error}
      />
      <SearchCity isShowSearch={isShowSearch} />
      <NotFound error={error} />
    </Container>
  );
}

export default App;
