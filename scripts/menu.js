"use strict";

let socialIconNav = document.querySelector('.socialIconNav');
let socialLink = document.querySelector('#socialLink');
// let socialLink = document.querySelector('.headerMessage');

socialLink.addEventListener('click', function () {
  socialIconNav.style.display = 'block';
});

socialLink.addEventListener('dblclick', function () {
  socialIconNav.style.display = 'none';
});