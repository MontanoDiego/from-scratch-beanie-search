export function renderBaby(baby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = baby.image;
    img.alt = baby.title;

    

    const h2 = document.createElement('h2');
    h2.textContent = baby.title;

    const p = document.createElement('p');
    if (baby.releaseYear === null) {
        p.textContent = 'Released: unknown';
    } else {
        p.textContent = 'Released: ' + baby.releaseYear;
    }
    p.classList.add('attributes');
    
    li.append(h2, img, p);

    return li;
}

export function renderAnimalOptions(animalType) {
    const option = document.createElement('option');
    option.value = animalType.name;
    option.textContent = animalType.name;

    return option;
}