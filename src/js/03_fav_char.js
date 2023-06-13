// Favorites
'use strict';
// event click function to mark favs
const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  const indexCharacter = favCharacters.findIndex((item) => item._id === id);
  const selectedCharacter = charactersList.find((item) => item._id === id);
  if (indexCharacter === -1) {
    favCharacters.push(selectedCharacter);
  }
  renderFavCharacters();
  // show favorites section on click
  if (favCharacters.length > 0) {
    favSection.classList.remove('hidden');
  }
};

// render only fav characters in diff section than all characters
function renderFavCharacters() {
  renderAllCharacters(favCharacters, ulElementFav);
  renderDeleteBtn();
  deleteFav();
}

// get through the list to select fav characters
function addEventCharacter() {
  // get all the liElements to be able to listen to the click on them
  const liElementList = document.querySelectorAll('.js_character_item');
  const favLiElementList = [];
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickFav);
    // push liElement and add new class to fav characters ONLY
    if (eachLi.parentNode.classList.contains('character_favourite__list')) {
      favLiElementList.push(eachLi);
      //add styles to fav characters only
      eachLi.classList.add('fav__character', 'js_fav_character');
    }
  }
}

// leave it on page refresh so that it hides favorites by default
if (favCharacters.length === 0) {
  favSection.classList.add('hidden');
}
