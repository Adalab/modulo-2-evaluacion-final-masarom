'use strict';

const ulElement = document.querySelector('.js_char_list');

const URL = 'https://api.disneyapi.dev/character?pageSize=50';

let charactersList = [];
const charactersLS = localStorage.getItem('allCharacters');

// fetch y eventos

function init() {
  if (charactersLS) {
    charactersList = JSON.parse(localStorage.getItem('allCharacters'));
    console.log('localStorage');
    renderAllCharacters(charactersList, ulElement);
  } else {
    console.log('fetch');
    fetch(URL)
      .then((response) => response.json())
      .then((content) => {
        charactersList = content.data;
        renderAllCharacters(charactersList, ulElement);
        localStorage.setItem('allCharacters', JSON.stringify(charactersList));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

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

// Favoritos
let favCharacters = [];

const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  const selectedCharacter = charactersList.find((item) => item._id === id);
  const indexCharacter = favCharacters.findIndex((item) => item._id === id);
  if (indexCharacter === -1) {
    favCharacters.push(selectedCharacter);
  }
  renderFavCharacters();
};

function addEventCharacter() {
  const liElementList = document.querySelectorAll('.js_character_item');
  const favLiElementList = [];
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickFav);
    // añadir una clase SOLO a los marcados como favorito
    if (eachLi.parentNode.classList.contains('character_favourite__list')) {
      favLiElementList.push(eachLi);
      eachLi.classList.add('fav__character');
    }
  }
  console.log(favLiElementList);
}

const ulElementFav = document.querySelector('.character_favourite__list');

function renderFavCharacters() {
  ulElementFav.innerHTML = '';
  renderAllCharacters(favCharacters, ulElementFav);
}

init();
