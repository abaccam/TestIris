"use strict";

let socialIcon = document.querySelector('.socialIcon');
let socialLink = document.querySelector('#socialLink');
// let socialLink = document.querySelector('.headerMessage');

socialLink.addEventListener('click', function () {
  socialIcon.style.display = 'block';
});

socialLink.addEventListener('dblclick', function () {
  socialIcon.style.display = 'none';
});