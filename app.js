/* Imports */

import { getBeanieBabies, getAnimalTypes } from './fetch-utils.js';
import { renderAnimalOptions, renderBaby } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('babies-container');
const form = document.getElementById('search-form');
const animalSelect = document.getElementById('animal-type-select');

/* State */
let beanies = [];
let animalTypes = [];

/* Events */
self.addEventListener('load', async () => {
    findBeanies();
    const response = await getAnimalTypes();
    animalTypes = response.data;
    await displayAnimalOptions();
    displayBeanies();
});

async function findBeanies(animalTypes) {
    const response = await getBeanieBabies(animalTypes);
    beanies = response.data;
    displayBeanies();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const animal = formData.get('animal');
    findBeanies(animal);
});

/* Display Functions */
function displayAnimalOptions() {
    for (let animal of animalTypes) {
        const option = renderAnimalOptions(animal);
        animalSelect.append(option);
    }
}

function displayBeanies() {
    beanieList.innerHTML = '';

    for (let beanie of beanies) {
        const beanieEl = renderBaby(beanie);
        beanieList.append(beanieEl);
    }
}


// (don't forget to call any display functions you want to run on page load!)

console.log(beanies);