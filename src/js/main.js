'use strict';

const ulElement = document.querySelector('.js_char_list');

const URL = 'https://api.disneyapi.dev/character?pageSize=50';

let charactersList = [];
function renderCharacters() {
  ulElement.innerHTML = '';
  for (const eachCharacter of charactersList) {
    const characterImg = eachCharacter.imageUrl;
    const characterName = eachCharacter.name;
    ulElement.innerHTML += `
      <li class="character__item">
        <img class="character__item-img" src="${characterImg}" alt="Disney character">
        <p class="character__item-name">${characterName}</p>
      </li>`;
  }
}

// Favoritos

const handleClickFavourite(ev) {
    
}

// fetch y eventos

fetch(URL)
  .then((response) => response.json())
  .then((content) => {
    charactersList = content.data;
    renderCharacters();
  })
  .catch((error) => {
    console.log(error);
  });

ulElement.addEventListener('click', handleClickFavourite);
