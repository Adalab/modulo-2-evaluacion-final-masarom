'use strict';
// fetch and events
//function to choose btw localStorage or fetch
function init() {
  if (charactersLS) {
    charactersList = JSON.parse(localStorage.getItem('allCharacters'));
    renderAllCharacters(charactersList, ulElement);
  } else {
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
init();

function addEventCharacter() {
  const liElementList = document.querySelectorAll('.js_character_item');
  const favLiElementList = [];
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickFav);
    // add new class to fav characters ONLY
    if (eachLi.parentNode.classList.contains('character_favourite__list')) {
      favLiElementList.push(eachLi);
      //add styles to fav characters only
      eachLi.classList.add('fav__character', 'js_fav_character');
    }
  }
}
