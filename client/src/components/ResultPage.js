const ResultPage = ({result, city}) => {
    return (<div>
            {/* if result(response) is null or 404 or if user input city name is not valid  */}
      {result ? (
        result.data.cod === "404" ? (
          `The city ${city} is not valid: Enter a valid city`
        ) : (
          // if city name is valid give the result
          <div className="result">
            <img src={`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@4x.png`} alt={result.data.weather[0].description}/>
          
            <p>
              {" "}
              City:{" "}
              <span className="data">
                {result.data.name}, {result.data.sys.country}{" "}
              </span>
            </p>
            <p>
              Description:{" "}
              <span className="data">
                {result.data.weather[0].description}{" "}
              </span>{" "}
            </p>
            <p>
              Icon:{" "}
              <span className="data">
                {result.data.weather[0].icon}{" "}
              </span>{" "}
            </p>
            <p>
              Temperature:{" "}
              <span className="data">
                {" "}
                {result.data.main.temp}
                <sup>o</sup>F
              </span>{" "}
            </p>
            <p>
              Feels like:{" "}
              <span className="data">
                {" "}
                {result.data.main.feels_like}
                <sup>o</sup>F{" "}
              </span>{" "}
            </p>
            <p>
              Maximum temperature:{" "}
              <span className="data">
                {result.data.main.temp_min} <sup>o</sup>F
              </span>{" "}
            </p>
            <p>
              Minimum temperature:{" "}
              <span className="data">
                {result.data.main.temp_max}
                <sup>o</sup>F{" "}
              </span>{" "}
            </p>
            <p>
              Humidity:{" "}
              <span className="data">{result.data.main.humidity}% </span>{" "}
            </p>
            <p>
              Sunrise:
              <span className="data">
                {" "}
                {new Date(result.data.sys.sunrise * 1000).toLocaleString()}
              </span>
            </p>
            <p>
              Sunset:{" "}
              <span className="data">
                {" "}
                {new Date(result.data.sys.sunset * 1000).toLocaleString()}{" "}
              </span>
            </p>
          </div>
        )
      ) : (
        <p>Please enter the a city name</p>
      )}
    </div> );
}
 
export default ResultPage;