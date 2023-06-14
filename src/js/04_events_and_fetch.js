// fetch and events
'use strict';
//function to choose between localStorage or fetch
/* function init(url) {
  if (charactersLS) {
    charactersList = JSON.parse(localStorage.getItem('allCharacters'));
    renderAllCharacters(charactersList, ulElement);
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        charactersList = content.data;
        console.log(charactersList);
        renderAllCharacters(charactersList, ulElement);
        localStorage.setItem('allCharacters', JSON.stringify(charactersList));
      })
      .catch((error) => {
        console.log(error);
      });
  }
} */
init(URL);

function init(url, page) {
  if (charactersLS) {
    charactersList = JSON.parse(localStorage.getItem('allCharacters'));
    renderAllCharacters(charactersList, ulElement);
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        charactersList = content.data;
        console.log(charactersList);
        renderAllCharacters(charactersList, ulElement);
        localStorage.setItem('allCharacters', JSON.stringify(charactersList));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
