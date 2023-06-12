'use strict';

const ulElement = document.querySelector('.js_char_list');

const URL = 'https://api.disneyapi.dev/character?pageSize=50';

let charactersList = [];
const charactersLS = localStorage.getItem('allCharacters');

let favCharacters = [];

const ulElementFav = document.querySelector('.character_favourite__list');