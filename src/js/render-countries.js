import notifications from './notification';
import refs from './refs';
import fetchCountries from './fetchCountries';
import countryRender from '../templates/country-template.hbs';
import countryRenderList from '../templates/country-template-list.hbs';
import debounce from 'lodash.debounce';
refs.inputRef.addEventListener(
  'input',
  debounce(e => {
    const inputVal = e.target.value;
    refs.listContainerRef.innerHTML = '';
    if (!inputVal) {
      return;
    }
    fetchCountries(inputVal);
  }, 500),
);

function renderCountries(array) {
  if (array.length > 10) {
    notifications.onOverflowRespose();
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
