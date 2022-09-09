const SearchForm = ({handleSubmit, onChange, city}) => {
    return (  <form onSubmit={handleSubmit}>
        <input
          id="city-name"
          type="text"
          placeholder="Please enter the city name"
          name="city"
          onChange={onChange}
          value={city}
          required
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form> );
}
 
export default SearchForm;