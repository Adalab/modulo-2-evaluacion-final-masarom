function renderOneCharacter(character) {
  let html = `
    <li class="character__item js_character_item" id="${character._id}">
      <img class="character__item-img" src="${character.imageUrl}" alt="Disney character">
      <p class="character__item-name">${character.name}</p>
    </li>`;
  if (character.imageUrl === '') {
    const defaultImg = 'https://fakeimg.pl/210x295?text=Disney&font=bebas';
    html = `
    <li class="character__item js_character_item" id="${character._id}">
      <img class="character__item-img" src="${defaultImg}" alt="Disney character">
      <p class="character__item-name">${character.name}</p>
    </li>`;
  }
  return html;
}

function renderAllCharacters(list, ul) {
  for (const eachCharacter of list) {
    ul.innerHTML += renderOneCharacter(eachCharacter);
  }
  addEventCharacter();
}