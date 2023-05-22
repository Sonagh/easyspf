const hamburgerBtn = document.querySelector('.btn-hamburger');
const leftSideMenu = document.querySelector('.left-side-menu');

hamburgerBtn.addEventListener('click', function() {
  leftSideMenu.classList.toggle('opened');
});

const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.toggle('opened');
  });
});
