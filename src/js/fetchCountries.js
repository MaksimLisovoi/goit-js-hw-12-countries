import renderCountries from './render-countries';
function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .then(d => renderCountries(d));
}

export default fetchCountries;
