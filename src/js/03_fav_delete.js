// delete function for fav characters
'use strict';

// create delete button for every character
function createDeleteBtn() {
  // create HTML elements
  const newDeleteBtn = document.createElement('div');
  const newSpan = document.createElement('span');
  // add content to HTML elements
  const newSpanContent = document.createTextNode('X');
  newSpan.appendChild(newSpanContent);
  //add classes
  newDeleteBtn.classList.add('delete__fav', 'js_delete_btn');
  newSpan.classList.add('delete__fav-span');
  newDeleteBtn.appendChild(newSpan);
  return newDeleteBtn;
}

// render the delete button on every character(liElement)
function renderDeleteBtn() {
  const liElementList = document.querySelectorAll('.js_fav_character');
  for (const eachLi of liElementList) {
    eachLi.appendChild(createDeleteBtn());
  }
}

// listen to the click on the button
function deleteFav() {
  const liElementList = document.querySelectorAll('.js_fav_character');
  const deleteBtn = document.querySelector('.js_delete_btn');
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickDelete);
  }
}
// delete function
function handleClickDelete(ev) {
  ev.preventDefault();
  const id = parseInt(ev.currentTarget.id);
  const target = ev.target;
  // check index to delete characters from favorites array
  //then render favorites again
  if (target.nodeName.toLowerCase() === 'span') {
    const indexCharacter = favCharacters.findIndex((item) => item._id === id);
    favCharacters.splice(indexCharacter, 1);
    renderFavCharacters();
  }
  // check array length to hide favorites section
  if (favCharacters.length === 0) {
    favSection.classList.add('hidden');
  }
}
