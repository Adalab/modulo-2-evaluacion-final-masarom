'use strict';

const ulElement = document.querySelector('.js_char_list');

const URL = 'https://api.disneyapi.dev/character?pageSize=50';

let charactersList = [];

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

function renderAllCharacters() {
  for (const eachCharacter of charactersList) {
    ulElement.innerHTML += renderOneCharacter(eachCharacter);
  }
  addEventCharacter();
}

// Favoritos
let favCharacters = [];

function addEventCharacter() {
  const liElementList = document.querySelectorAll('.js_character_item');
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickFav);
  }
}

const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  const selectedCharacter = charactersList.find((item) => item._id === id);
  const indexCharacter = favCharacters.findIndex((item) => item._id === id);

  if (indexCharacter === -1) {
    favCharacters.push(selectedCharacter);
  }
  console.log(favCharacters);
};

// fetch y eventos

fetch(URL)
  .then((response) => response.json())
  .then((content) => {
    charactersList = content.data;
    renderAllCharacters();
  })
  .catch((error) => {
    console.log(error);
  });
