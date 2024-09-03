'use strict';
const dice = document.querySelector('.btn--roll');
dice.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let imageElement = document.querySelector('.dice');
  imageElement.src = `dice-${randomNumber}.png`;
});
