/* Imports */

import { getBeanieBabies, getAnimalTypes } from './fetch-utils.js';
import { renderAnimalOptions } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('babies-container');
const form = document.getElementById('search-form');
const animalSelect = document.getElementById('animal-type-select');

/* State */
let beanies = [];
let animalTypes = [];

/* Events */
self.addEventListener('load', async () => {
    const response = await getAnimalTypes();
    animalTypes = response;
    await displayAnimalOptions();
});


/* Display Functions */
function displayAnimalOptions() {
    for (let animal of animalTypes) {
        const option = renderAnimalOptions(animal);
        animalSelect.append(option);
    }
}


// (don't forget to call any display functions you want to run on page load!)

console.log(getAnimalTypes());