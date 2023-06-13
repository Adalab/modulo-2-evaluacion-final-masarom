// search
'use strict';
let searchedCharacters = [];

function handleClickSearch(ev) {
  ev.preventDefault();
  const valueInput = searchText.value;
  const filteredCharacters = charactersList.filter((item) =>
    item.name.toLowerCase().includes(valueInput.toLowerCase())
  );
  renderAllCharacters(filteredCharacters, ulElement);
  if(filteredCharacters !== true) {
    const newErrorPar = document.createElement ('p');
    newErrorPar.classList.add('error__msg');
    const errorMsg = document.createTextNode('Lo siento, el personaje que buscas no se encuentra en la base de datos.');
    newErrorPar.appendChild(errorMsg);
    ulElement.appendChild(newErrorPar);
  }
}

// event
searchBtn.addEventListener('click', handleClickSearch);
