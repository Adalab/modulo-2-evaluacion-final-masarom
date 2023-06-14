//const newParPgContent = document.createTextNode(`Page ${page}`);
'use strict';

/* -. Crear y llamar a los botones del HTML en JS
 ** -. hacer evento para cada btn (o un evento con event target?)
 ** -. hacer que la accion de cada botón sea llamar a nextPg o previousPg
 ** -.
 ** -. Pintar en el p la página en la que estoy.
 */
// next pages btns

const pagesDiv = document.querySelector('.js_page_control');
const previousPgBtn = document.querySelector('.js_previous_page');
const nextPgBtn = document.querySelector('.js_next_page');
const currentPgSpan = document.querySelector('.js_current_page');

let currentPg = 1;
const urlFirstpg = '//api.disneyapi.dev/character?page=1&pageSize=50';

// make two functions, one for the next page and one for the prev page:
function getNextPageUrl() {
  const nextPg = currentPg + 1;
  const url = `//api.disneyapi.dev/character?page=${nextPg}&pageSize=50`;
  return url; //return necessary to substitute the function for the URL
}

function getPrevPgUrl() {
  if (currentPg > 1) { //first page is 1, less than that doesn't exist
    const prevPg = currentPg - 1;
    const url = `//api.disneyapi.dev/character?page=${prevPg}&pageSize=50`;
    return url;
  } else {
    return null;
  }
}

/* const urlNextPg = '//api.disneyapi.dev/character?page=2&pageSize=50';
//dev.adalab.es/api/disney/?pageSize=15&page=2

const urlPrevPg = '//api.disneyapi.dev/character?page=1&pageSize=50';
//dev.adalab.es/api/disney/?pageSize=15&page=1 */

function handleClickPage(ev) {
  ev.preventDefault();
  const id = ev.target.id;
  const target = ev.target;
  console.log(target.parentNode.id);
  if (target.id === 'next_page' || target.parentNode.id === 'next_page') {
    const urlNextPg = getNextPageUrl();
    init(urlNextPg);
    currentPg++;
    currentPgSpan.innerHTML = currentPg;
  }
  if (target.id === 'prev_page' || target.parentNode.id === 'prev_page') {
    const urlPrevPg = getPrevPgUrl();
    init(urlPrevPg);
    currentPg--;
    currentPgSpan.innerHTML = currentPg;
  }
}

pagesDiv.addEventListener('click', handleClickPage);

/* let currentPg = 1;
currentPgSpan.innerHTML = currentPg;

currentPg--;
currentPgSpan.innerHMTL = currentPg;
currentPg--;
currentPgSpan.innerHMTL = currentPg; */
