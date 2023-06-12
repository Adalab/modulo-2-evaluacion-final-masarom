"use strict";const URL="//api.disneyapi.dev/character?pageSize=50",ulElement=document.querySelector(".js_char_list"),charactersLS=localStorage.getItem("allCharacters"),ulElementFav=document.querySelector(".character_favourite__list");let charactersList=[],favCharacters=[];function renderOneCharacter(e){const t=document.createElement("li"),a=document.createElement("img"),r=document.createElement("p"),c=document.createTextNode(e.name);if(t.classList.add("character__item","js_character_item"),t.setAttribute("id",e._id),a.classList.add("character__item-img"),a.src=e.imageUrl,r.classList.add("character__item-name"),r.appendChild(c),t.appendChild(a),t.appendChild(r),""===e.imageUrl){const e="https://fakeimg.pl/210x295?text=Disney&font=bebas";a.src=e}return t}function renderAllCharacters(e,t){for(const a of e)t.appendChild(renderOneCharacter(a));addEventCharacter()}const handleClickFav=e=>{const t=parseInt(e.currentTarget.id),a=charactersList.find(e=>e._id===t);-1===favCharacters.findIndex(e=>e._id===t)&&favCharacters.push(a),renderFavCharacters()};function renderFavCharacters(){ulElementFav.innerHTML="",renderAllCharacters(favCharacters,ulElementFav)}function init(){charactersLS?(charactersList=JSON.parse(localStorage.getItem("allCharacters")),renderAllCharacters(charactersList,ulElement)):fetch(URL).then(e=>e.json()).then(e=>{charactersList=e.data,renderAllCharacters(charactersList,ulElement),localStorage.setItem("allCharacters",JSON.stringify(charactersList))}).catch(e=>{console.log(e)})}function addEventCharacter(){const e=document.querySelectorAll(".js_character_item"),t=[];for(const a of e)a.addEventListener("click",handleClickFav),a.parentNode.classList.contains("character_favourite__list")&&(t.push(a),a.style.backgroundColor="blanchedalmond")}init();