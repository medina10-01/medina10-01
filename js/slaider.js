let bntnet = document.querySelector('#btnNex');
let btnbefore = document.querySelector('#btnBefore');
let contimg = document.querySelector('#imgCont');
let imgNext = document.querySelector('#imgContNex');
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
function anime2() {
        if (imgNext.classList.contains('animation')) {
            imgNext.classList.add('animation');
            contimg.classList.remove('img-lotus');
        }else{
            imgNext.classList.remove('animation');
            contimg.classList.add('img-lotus');
        }
}
function anime() {
    if (contimg.classList.contains('animation')) {
        imgNext.classList.remove('animation');
        contimg.classList.add('img-lotus');
    }else{
        contimg.classList.add('animation');
        contimg.classList.remove('img-lotus');
    }
    setTimeout(() => {
        proyectar();
    }, 500);
}
function proyectar() {
    if (contador == 3) {
        contimg.setAttribute('src', ('img/lotus (1).webp'));
    }
    if (contador == 1) {
        contimg.setAttribute('src', ('img/lotus (2).webp'));
    }
    if (contador == 2) {
        contimg.setAttribute('src', ('img/lotus (3).webp'));
    }
}
btnbefore.addEventListener('click', restar);
bntnet.addEventListener('click', sumar);