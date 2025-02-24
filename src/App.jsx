import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SearchCity from "./components/SearchCity/SearchCity";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Container from "./components/Container/Container";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const [
    weatherData,
    forecastData,
    isShowSearch,
    error,
    isLoading,
    getWeatherData,
  ] = useWeatherData();

  return (
    <Container>
      <Header getWeatherData={getWeatherData} />
      <SearchCity isShowSearch={isShowSearch} />
      <NotFound error={error} />
      <WeatherInfo
        weatherData={weatherData}
        forecastData={forecastData}
        error={error}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default App;
