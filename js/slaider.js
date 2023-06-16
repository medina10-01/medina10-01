let bntnet = document.querySelector('#btnNex');
let btnbefore = document.querySelector('#btnBefore');
let contimg = document.querySelector('#imgCont');
<<<<<<< HEAD
let imgNext = document.querySelector('#imgContNex');
=======
>>>>>>> b78f189c06bf85592115dee5b602813505b357f5
contador = 3;
function sumar() {
    contador++
    if (contador == 4) {
        contador =1;
    }
    anime();
<<<<<<< HEAD
    anime2();
=======
>>>>>>> b78f189c06bf85592115dee5b602813505b357f5
}
function restar() {
    contador--
    if (contador == 0) {
        contador = 3;
    }
    anime();
<<<<<<< HEAD
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
=======
}

function anime() {
    if (contimg.classList.contains('animation')) {
        contimg.classList.add('animation2');
        contimg.classList.remove('animation');
    }else{
        contimg.classList.remove('animation2');
        contimg.classList.add('animation');
>>>>>>> b78f189c06bf85592115dee5b602813505b357f5
    }
    setTimeout(() => {
        proyectar();
    }, 500);
}
function proyectar() {
    if (contador == 3) {
<<<<<<< HEAD
        contimg.setAttribute('src', ('img/lotus (1).webp'));
    }
    if (contador == 1) {
        contimg.setAttribute('src', ('img/lotus (2).webp'));
    }
    if (contador == 2) {
        contimg.setAttribute('src', ('img/lotus (3).webp'));
    }
}
=======
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


>>>>>>> b78f189c06bf85592115dee5b602813505b357f5
btnbefore.addEventListener('click', restar);
bntnet.addEventListener('click', sumar);