var btns = document.getElementsByClassName('section-reviews__button');
var list = document.getElementsByClassName('section-reviews__list');
var itemFirst = document.getElementsByClassName('section-reviews__item--position-oleg');
var itemTwo = document.getElementsByClassName('section-reviews__item--position-semen');
var itemThree = document.getElementsByClassName('section-reviews__item--position-serega');
var itemFour = document.getElementsByClassName('section-reviews__item--position-inocentiy');
var message = document.getElementsByClassName('section-reviews__message');

btns[0].onclick = function() {
    list[0].classList.add("section-reviews__list--structured");
    
    itemFirst[0].classList.remove("section-reviews__item--position-oleg");
    itemTwo[0].classList.remove("section-reviews__item--position-semen");
    itemThree[0].classList.remove("section-reviews__item--position-serega");
    itemFour[0].classList.remove("section-reviews__item--position-inocentiy");

    btns[0].classList.add("section-reviews__button--close");
    message[0].classList.add("section-reviews__message--open");
}
