import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  // when user input the form
  const [city, setCity] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({ city });
    // This is the custom hook
  };

  const onChange = (ev) => setCity(ev.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="city-name"
        type="text"
        placeholder="Please enter the city name"
        name="city"
        onChange={onChange}
        value={city}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchForm;
