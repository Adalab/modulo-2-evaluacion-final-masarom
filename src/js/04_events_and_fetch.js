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
init();

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