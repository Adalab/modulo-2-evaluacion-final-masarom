// Favorites
'use strict';
// event click function
const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  // const index declared outside of condition to use it twice
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
// leave it on page recharge so that it hides favorites
if (favCharacters.length === 0) {
  favSection.classList.add('hidden');
}