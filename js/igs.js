let menu=document.querySelector('.delate1');
let hamd=document.querySelector('#menuHamb');


hamd.addEventListener('click', function mostar() {
    if (menu.classList.contains('delate1')) {
        menu.classList.remove('delate');
        menu.classList.add('visible');
    }else{
        menu.classList.add('delate');
        menu.classList.remove('visible');
    }
}
);