'use strict';
// Favoritos

const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  const selectedCharacter = charactersList.find((item) => item._id === id);
  const indexCharacter = favCharacters.findIndex((item) => item._id === id);
  if (indexCharacter === -1) {
    favCharacters.push(selectedCharacter);
  }
  renderFavCharacters();
};

function renderFavCharacters() {
  ulElementFav.innerHTML = '';
  renderAllCharacters(favCharacters, ulElementFav);
}
