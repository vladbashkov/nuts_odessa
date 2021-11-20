function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
// Prosucts swipper

const swiper = new Swiper('.swiper', {
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


// About swipper

const aboutSwiper = new Swiper('.about-swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});;

const body = document.querySelector('body'),
    burgerMenu = document.querySelector('#burgerMenu'),
    menuOpenBTN = document.querySelector('#burgerBTN'),
    menuCloseBTN = document.querySelector('#burgerClose');

let menuOpen = false;
menuOpenBTN.addEventListener('click', ()=>{
    if(!menuOpen){
        burgerMenu.classList.add('show');
        body.classList.add('ofhd');
        menuOpen = true;
    } 
})

menuCloseBTN.addEventListener('click', ()=>{
    if(menuOpen){
        burgerMenu.classList.remove('show');
        body.classList.remove('ofhd');
        menuOpen = false;
    } 
})