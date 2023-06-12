// search
'use strict';
/* -. recoger input text value
 ** -. hacer evento click buscar
 ** -. Llamar a la API de personajes
 ** -. Comprobar si el value coincide con la API
 */
let searchedCharacters = [];

function handleClickSearch(ev) {
  ev.preventDefault();
  const valueInput = searchText.value;
  fetch(`https://api.disneyapi.dev/character?name=${valueInput}`)
    .then((response) => response.json())
    .then((content) => {
      charactersList = content.data;
      // check if searchedCharacters is array to apply a loop or not
      if (Array.isArray(charactersList)) {
        for (const eachCharacter of charactersList) {
          if (eachCharacter.name.includes(valueInput)) {
            ulElement.innerHTML = '';
            renderAllCharacters(charactersList, ulElement);
          }
        }
      } else if (charactersList.name.includes(valueInput)) {
        console.log(charactersList.name);
        ulElement.innerHTML = '';
        ulElement.appendChild(renderOneCharacter(charactersList));
        console.log(charactersList);
        addEventCharacter();
      }
    });
}

// event
searchBtn.addEventListener('click', handleClickSearch);