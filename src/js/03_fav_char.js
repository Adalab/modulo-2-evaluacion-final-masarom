'use strict';
// Favorites
// event click function
const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  console.log(id);
  // Array validation necessary to add favs in search
  if (Array.isArray(charactersList)) {
    const selectedCharacter = charactersList.find((item) => item._id === id);
    const indexCharacter = favCharacters.findIndex((item) => item._id === id);
    if (indexCharacter === -1) {
      favCharacters.push(selectedCharacter);
    }
  } else {
    favCharacters.push(charactersList);
  }
  renderFavCharacters();
};
// render only fav characters in diff section than all characters
function renderFavCharacters() {
  ulElementFav.innerHTML = '';
  renderAllCharacters(favCharacters, ulElementFav);
}
