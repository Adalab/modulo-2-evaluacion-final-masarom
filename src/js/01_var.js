'use strict';
// variables
const URL = '//api.disneyapi.dev/character?pageSize=50';
const ulElement = document.querySelector('.js_char_list');
const charactersLS = localStorage.getItem('allCharacters');
const ulElementFav = document.querySelector('.character_favourite__list');
let charactersList = [];
let favCharacters = [];