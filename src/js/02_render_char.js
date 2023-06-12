'use strict';

function renderOneCharacter(character) {
  //create all HTML elements
  const newLi = document.createElement('li');
  const newImg = document.createElement('img');
  const newPar = document.createElement('p');
  const newParContent = document.createTextNode(character.name);
  // add attributes to HTML elements
  newLi.classList.add('character__item', 'js_character_item');
  newLi.setAttribute('id', character._id);
  newImg.classList.add('character__item-img');
  newImg.src = character.imageUrl;
  newPar.classList.add('character__item-name');
  newPar.appendChild(newParContent);
  // add newImg and newPar to newLi
  newLi.appendChild(newImg);
  newLi.appendChild(newPar);
  //default image
  if (character.imageUrl === false) {
    const defaultImg = 'https://fakeimg.pl/210x295?text=Disney&font=bebas';
    newImg.src = defaultImg;
  }
  return newLi;
}

function renderAllCharacters(list, ul) {
  for (const eachCharacter of list) {
    ul.appendChild(renderOneCharacter(eachCharacter));
  }
  addEventCharacter();
}
