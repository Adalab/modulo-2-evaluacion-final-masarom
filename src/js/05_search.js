// search
'use strict';
// search function
function handleClickSearch(ev) {
  ev.preventDefault();
  const valueInput = searchText.value;
  //filter through charactersList array to get the ones matchin the valueInput
  const filteredCharacters = charactersList.filter((item) =>
    item.name.toLowerCase().includes(valueInput.toLowerCase())
  );
  //render only the filtered characters (leaving favorites ul alone)
  renderAllCharacters(filteredCharacters, ulElement);
  // check if array is empty to show error message
  if (filteredCharacters.length === 0) {
    const newErrorPar = document.createElement('p');
    newErrorPar.classList.add('error__msg');
    const errorMsg = document.createTextNode('Lo siento, el personaje que buscas no se encuentra en la base de datos.');
    newErrorPar.appendChild(errorMsg);
    ulElement.appendChild(newErrorPar);
  }
}

function handleClickLog (ev) {
  ev.preventDefault();
  console.log(favCharacters.length);
}

// event
searchBtn.addEventListener('click', handleClickSearch);
logBtn.addEventListener('click', handleClickLog);
