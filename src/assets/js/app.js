console.log('file 1');
(function () {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.header__navbar');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        navbar.classList.toggle('navbar_active');
    });
}());
