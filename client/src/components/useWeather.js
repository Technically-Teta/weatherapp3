import { useState, useEffect } from "react";

// This is the custom hook
const useWeather = ({ city }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!city) {
      return;
    }
    // Create a controller
    //A controller is an extremely simple object.

    //It has a single method abort(),
    //And a single property signal that allows to set event listeners on it.
    const controller = new AbortController();
    const params = new URLSearchParams({ cityName: city });

    //To be able to cancel fetch, pass the signal property of an AbortController as a fetch option:
    fetch(`/weather?${params}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setResult(data));
    return () => {
      controller.abort(); // abort!
    };
  }, [city]);

  return result;
};

export default useWeather;
