'use strict';
// delete function for fav characters

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

function renderDeleteBtn() {
  const liElementList = document.querySelectorAll('.js_fav_character');
  for (const eachLi of liElementList) {
    eachLi.appendChild(createDeleteBtn());
  }
}

function deleteFav() {
  const liElementList = document.querySelectorAll('.js_fav_character');
  const deleteBtn = document.querySelector('.js_delete_btn');
  for (const eachLi of liElementList) {
    eachLi.addEventListener('click', handleClickDelete);
  }
}

function handleClickDelete(ev) {
  ev.preventDefault();
  const id = parseInt(ev.currentTarget.id);
  const target = ev.target;
  if (target.nodeName.toLowerCase() === 'span') {
    const indexCharacter = favCharacters.findIndex((item) => item._id === id);
    favCharacters.splice(indexCharacter, 1);
    renderFavCharacters();
  }
  if (favCharacters.length === 0) {
    favSection.classList.add('hidden');
  }
}
