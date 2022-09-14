import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import ResultPage from "./components/ResultPage";
import useWeather from "./components/useWeather";

function App() {
  // only we want when the user submit the form
  const [city, setCity] = useState(null);

  const data = useWeather({ city });

  const onSubmit = ({ city }) => {
    setCity(city);
  };

  return (
    <div className="App">
      <div className="weather">
        <h1 className="App-header">Weather forecast</h1>
        <SearchForm onSubmit={onSubmit} />
      </div>
      <ResultPage result={data} city={city} />
    </div>
  );
}

export default App;
