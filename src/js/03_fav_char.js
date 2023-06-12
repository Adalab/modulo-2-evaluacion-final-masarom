'use strict';
// Favorites
// event click function
const handleClickFav = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  // Array validation necessary to add favs in search
  // const index declared outside of condition to use it twice
  const indexCharacter = favCharacters.findIndex((item) => item._id === id);
  if (Array.isArray(charactersList)) {
    const selectedCharacter = charactersList.find((item) => item._id === id);
    if (indexCharacter === -1) {
      favCharacters.push(selectedCharacter);
    }
  } else if (Array.isArray(charactersList) === false) {
    //when charactersList is not array push the object directly
    if (indexCharacter === -1) {
      favCharacters.push(charactersList);
    }
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
