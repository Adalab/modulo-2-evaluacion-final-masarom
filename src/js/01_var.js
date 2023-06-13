// variables
'use strict';
const URL = '//api.disneyapi.dev/character?pageSize=50';
const ulElement = document.querySelector('.js_char_list');
const charactersLS = localStorage.getItem('allCharacters');
const favSection = document.querySelector('.js_fav_characters');
const ulElementFav = document.querySelector('.character_favourite__list');
let charactersList = [];
let favCharacters = [];
const searchText = document.querySelector('.js_search_text');
const searchBtn = document.querySelector('.js_search_btn');
