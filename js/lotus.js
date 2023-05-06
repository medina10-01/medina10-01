let nex = document.querySelector('#btnNex');
let before = document.querySelector('#btnBefore');
let imgCont = document.querySelector('#imgCont');

function imgNex() {
    imgCont.setAttribute("src", ("/img/lotus (2).webp"));
}

function imgBefore() {
    imgCont.setAttribute("src", ("/img/lotus (1).webp"));
}



nex.addEventListener('click', imgNex);
before.addEventListener('click', imgBefore);