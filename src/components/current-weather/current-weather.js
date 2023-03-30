import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="weather-icon">
        <div>
        <img
              src={`icons/${data.weather[0].icon}.svg`}
              alt="weather"
              className="weather-icon-value"
          />
        </div>
      </div>
      <div className="city">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="details">
        <div className="parameter-row">
          <span className="parameter-label">Feels like</span>
          <span className="parameter-value">
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{data.wind.speed} m/s</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{data.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">{data.main.pressure} hPa</span>
        </div>
      </div>
      <div className="temperature">
        <div>
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
