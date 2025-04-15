// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
  
    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  