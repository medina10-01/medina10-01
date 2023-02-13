let caja3 = document.getElementById("caja3");
let bol = document.getElementById("bola");
let ext = document.getElementById("ter");

caja3.addEventListener('click', function(){
    if (caja3.classList.contains('box3')) {
        caja3.classList.add('box3New')
        caja3.classList.remove('box3')
    }else{
        caja3.classList.add('box3')
        caja3.classList.remove('box3New')
    }
});

ext.addEventListener('click', function () {
    if (ext.classList.contains('ext')) {
        ext.classList.add('extNew')
        ext.classList.remove('ext')
    } else {
        ext.classList.remove('extNew')
        ext.classList.add('ext')
    }
    if (bol.classList.contains('bol')) {
        bol.classList.add("bolNew")
        bol.classList.remove("bol")
    }else{
        bol.classList.remove("bolNew")
        bol.classList.add("bol")
    }
})