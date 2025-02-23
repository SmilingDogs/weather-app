This weather app makes calls to OpenWeatherMap's website API to get current weather and forecasts for the city
provided by a user.

If you want to test it, you must create an account on the OpenWeathermap
and obtain the personal API key.

And put it right into the API url, instead of ${config.apiKey}  `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${config.apiKey}&units=metric`;
