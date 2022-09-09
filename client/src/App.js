import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm"
import ResultPage from "./components/ResultPage"

function App() {
  const [result, setResult] = useState(null);
  const [city, setCity] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const params = new URLSearchParams({ cityName: city });
 

    fetch(`/weather?${params}`)
      .then((res) => res.json())
      .then((data) => setResult(data));

    setCity("");
  };

  const onChange = 
    (ev) => setCity(ev.target.value)
  

  return (
    <div className="App">
      <div className="weather">
        <h1 className="App-header">Weather forecast</h1>
        <SearchForm handleSubmit= {handleSubmit} onChange = {onChange} city = {city}/>
       
      </div>
      <ResultPage result = {result} city = {city}/>
  
    </div>
  );
}

export default App;
