// export function renderBaby(baby) {
//     const li = document.createElement('li');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
// 
// 
//     const img = document.createElement('img');
//     img.src = baby.image;
//     img.alt = baby.title;
// 
//     h2.textContent = baby.title;
// 
//     p.textContent = baby.releaseDate;
// 
//     li.append(h2, img, p);
// 
//     return li;
// }

export function renderAnimalOptions(animalType) {
    const option = document.createElement('option');
    option.value = animalType.name;
    option.textContent = animalType.name;

    return option;
}