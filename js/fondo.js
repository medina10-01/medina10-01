let main2= document.getElementById('main2');
let menu= document.getElementById('men');
let body= document.getElementById('bodys');

let boton1= document.getElementById('boton1');
let boton2= document.getElementById('boton2');
let boton3= document.getElementById('boton3');
let boton4= document.getElementById('boton4');
let boton5= document.getElementById('boton5');
let boton6= document.getElementById('boton6');
let boton7= document.getElementById('boton7');
let boton8= document.getElementById('boton8');
let boton9= document.getElementById('boton9');

let boton1no=document.getElementById('boton1no');
let boton2no= document.getElementById('boton2no');
let boton3no= document.getElementById('boton3no');
let boton4no= document.getElementById('boton4no');
let boton5no= document.getElementById('boton5no');
let boton6no= document.getElementById('boton6no');
let boton7no= document.getElementById('boton7no');
let boton8no= document.getElementById('boton8no');
let boton9no= document.getElementById('boton9no');

menu.addEventListener('click', function () {
    if (main2.classList.contains('main2')) {
        main2.classList.remove('main2');
        main2.classList.add('main')
    }else{
        main2.classList.add('main2');
        main2.classList.remove('main');
    }
    if (body.classList.contains('oc')) {
        body.classList.remove('oc');
    } else {
        body.classList.add('oc')
    }
})

boton1.addEventListener('click', function () {
if (boton1no.classList.contains('no')) {
    boton1no.classList.add('si');
    boton1no.classList.remove('no');
}else{
    boton1no.classList.remove('si');
    boton1no.classList.add('no')
}
});
boton2.addEventListener('click', function () {
    if (boton2no.classList.contains('no')) {
        boton2no.classList.add('si');
        boton2no.classList.remove('no');
    }else{
        boton2no.classList.remove('si');
        boton2no.classList.add('no')
    }
});
boton3.addEventListener('click', function () {
    if (boton3no.classList.contains('no')) {
        boton3no.classList.add('si');
        boton3no.classList.remove('no');
    }else{
        boton3no.classList.remove('si');
        boton3no.classList.add('no')
    }
});
boton4.addEventListener('click', function () {
    if (boton4no.classList.contains('no')) {
        boton4no.classList.add('si');
        boton4no.classList.remove('no');
    }else{
        boton4no.classList.remove('si');
        boton4no.classList.add('no')
    }
});
boton5.addEventListener('click', function () {
    if (boton5no.classList.contains('no')) {
        boton5no.classList.add('si');
        boton5no.classList.remove('no');
    }else{
        boton5no.classList.remove('si');
        boton5no.classList.add('no')
    }
});
boton6.addEventListener('click', function () {
    if (boton6no.classList.contains('no')) {
        boton6no.classList.add('si');
        boton6no.classList.remove('no');
    }else{
        boton6no.classList.remove('si');
        boton6no.classList.add('no')
    }
});
boton7.addEventListener('click', function () {
    if (boton7no.classList.contains('no')) {
        boton7no.classList.add('si');
        boton7no.classList.remove('no');
    }else{
        boton7no.classList.remove('si');
        boton7no.classList.add('no')
    }
});
boton8.addEventListener('click', function () {
    if (boton8no.classList.contains('no')) {
        boton8no.classList.add('si');
        boton8no.classList.remove('no');
    }else{
        boton8no.classList.remove('si');
        boton8no.classList.add('no')
    }
});
boton9.addEventListener('click', function () {
    if (boton9no.classList.contains('no')) {
        boton9no.classList.add('si');
        boton9no.classList.remove('no');
    }else{
        boton9no.classList.remove('si');
        boton9no.classList.add('no')
    }
});