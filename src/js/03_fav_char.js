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
};
// render only fav characters in diff section than all characters
function renderFavCharacters() {
  ulElementFav.innerHTML = '';
  renderAllCharacters(favCharacters, ulElementFav);
  renderDeleteBtn();
  deleteFav();
}
