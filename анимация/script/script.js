window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // animate

  // Модальное окно
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  // popup

  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    const animatePopup = function () {

      popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
          popup.style.display = 'block';

          let timer= setTimer(function () {
            // popupContent.style.left = 10 + 'px';
            popupContent.style.transition = `0.4s ease-out`
          }, 20);
        });
      });

      popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
      });

    }
    animatePopup();
  }
  togglePopup();
});