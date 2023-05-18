let bntnet = document.querySelector('#btnNex');
let btnbefore = document.querySelector('#btnBefore');
let contimg = document.querySelector('#imgCont');
let imgNex = document.querySelector('#imgNex');
contador = 3;
function sumar() {
    contador++
    if (contador == 4) {
        contador =1;
    }
    anime();
    anime2();
}
function restar() {
    contador--
    if (contador == 0) {
        contador = 3;
    }
    anime();
    anime2();
}

function anime() {
    if (contimg.classList.contains('img-lotus')) {
        contimg.classList.add('img-lotus-before')
        contimg.classList.remove('img-lotus')
    }else{
        contimg.classList.remove('img-lotus-before')
        contimg.classList.add('img-lotus')
    }
    if (contimg.classList.contains('img-lotus-before')) {
        setTimeout(() => {
            proyectar();
        }, 2000);
    }
}
function anime2() {
    if (imgNex.classList.contains('img-lotus')) {
        imgNex.classList.remove('img-lotus')
        imgNex.classList.add('img-lotus-before2')
    }else{
        imgNex.classList.remove('img-lotus-before2')
        imgNex.classList.add('img-lotus')
    }
    if (contimg.classList.contains('img-lotus')) {
        setTimeout(() => {
            proyectar2();
        }, 2000);
    }
}
function proyectar() {
    if (contador == 3) {
        img1();
    }
    if (contador == 1) {
        img2();
    }
    if (contador == 2) {
        ima3();
    }
}
function proyectar2() {
    if (contador == 3) {
        imgn1();
    }
    if (contador == 1) {
        imgn2();
    }
    if (contador == 2) {
        imgn3();
    }
}
function img1() {
    contimg.setAttribute('src', ('img/lotus (1).webp'));  
}
function imgn1() {
    imgNex.setAttribute('src', ('img/lotus (1).webp'));  
}
function img2() {
    contimg.setAttribute('src', ('img/lotus (2).webp'));
}
function imgn2() {
    imgNex.setAttribute('src', ('img/lotus (2).webp'));
}
function ima3() {
    contimg.setAttribute('src', ('img/lotus (3).webp'));
}
function imgn3() {
    imgNex.setAttribute('src', ('img/lotus (3).webp'));
}

btnbefore.addEventListener('click', restar);
bntnet.addEventListener('click', sumar);