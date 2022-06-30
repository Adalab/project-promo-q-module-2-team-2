'use strict';

// Diseña
const designTitle = document.querySelector('.js_designTitle');
const divDesign = document.querySelector('.js_divDesign');
const iconDesign = document.querySelector('.js_iconDesign');

designTitle.addEventListener('click', () => {
  divDesign.classList.toggle('collapsed');
  iconDesign.classList.toggle('rotate');
});

// Rellena

const fillTitle = document.querySelector('.js_fillTitle');
const divFIll = document.querySelector('.js_divFill');
const iconFill = document.querySelector('.js_iconFill');

fillTitle.addEventListener('click', () => {
  divFIll.classList.toggle('collapsed');
  iconFill.classList.toggle('rotate');
  divDesign.classList.add('collapsed');
});

// Comparte

const shareTitle = document.querySelector('.js_shareTitle');
const divShare = document.querySelector('.js_divShare');
const iconShare = document.querySelector('.js_iconShare');
const buttonShare = document.querySelector('.js_shareButton');

shareTitle.addEventListener('click', () => {
  iconShare.classList.toggle('rotate');
  divDesign.classList.add('collapsed');
  buttonShare.classList.remove('collapsed');
});

buttonShare.addEventListener('click', () =>{
  divShare.classList.remove('collapsed');
});


// function toggleCollapsed(parClass) {
//   parClass.classList.toggle('collapsed');
// }