let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.close-button');
let buttonSearchHotels = document.querySelector('.button--search-hotels');

closeButton.onclick = function () {
    popup.classList.add('popup--hidden');
}

buttonSearchHotels.onclick = function () {
    popup.classList.remove('popup--hidden');
}
