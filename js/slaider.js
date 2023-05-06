let bntnet = document.querySelector('#btnNex');
let btnbefore = document.querySelector('#btnBefore');
let contimg = document.querySelector('#imgCont');
contador = 3;
function sumar() {
    contador++
    if (contador == 4) {
        contador =1;
    }
    anime();
}
function restar() {
    contador--
    if (contador == 0) {
        contador = 3;
    }
    anime();
}

function anime() {
    if (contimg.classList.contains('animation')) {
        contimg.classList.add('animation2');
        contimg.classList.remove('animation');
    }else{
        contimg.classList.remove('animation2');
        contimg.classList.add('animation');
    }
    setTimeout(() => {
        proyectar();
    }, 500);
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
function img1() {
    contimg.setAttribute('src', ('img/lotus (1).webp'));
}
function img2() {
    contimg.setAttribute('src', ('img/lotus (2).webp'));
}
function ima3() {
    contimg.setAttribute('src', ('img/lotus (3).webp'));
}


btnbefore.addEventListener('click', restar);
bntnet.addEventListener('click', sumar);