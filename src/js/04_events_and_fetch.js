// fetch and events
'use strict';
//function to choose between localStorage or fetch
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