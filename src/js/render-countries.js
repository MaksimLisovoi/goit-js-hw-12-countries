import refs from './refs';
import fetchCountries from './fetchCountries';
import countryRender from '../templates/country-template.hbs';
import countryRenderList from '../templates/country-template-list.hbs';

const debounce = require('lodash.debounce');
refs.inputRef.addEventListener(
  'input',
  debounce(e => {
    console.log(e.target.value);
    const inputVal = e.target.value;
    fetchCountries(inputVal);
  }, 500),
);
console.log(refs);

function renderCountries(array) {
  console.log(array);
  if (array.length > 10) {
    console.log(error);
  } else if (array.length === 1) {
    refs.listContainerRef.innerHTML = '';
    const countryTemplate = countryRender(array);
    refs.listContainerRef.insertAdjacentHTML('afterbegin', countryTemplate);
  } else if (array.length > 1 || array.length <= 10) {
    refs.listContainerRef.innerHTML = '';
    const countryList = countryRenderList(array);
    refs.listContainerRef.insertAdjacentHTML('afterbegin', countryList);
  }
}

export default renderCountries;
