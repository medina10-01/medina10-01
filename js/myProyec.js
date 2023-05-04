let img1 = document.getElementById('imag1');
let img2 = document.getElementById('imag2');
let img3 = document.getElementById('imag3');
let img4 = document.getElementById('imag4');
let img5 = document.getElementById('imag5');
let img6 = document.getElementById('imag6');
let img7 = document.getElementById('imag7');
let img8 = document.getElementById('imag8');
let img9 = document.getElementById('imag9');
let img10 = document.getElementById('imag10');
let img11 = document.getElementById('imag11');
let img12 = document.getElementById('imag12');
let img13 = document.getElementById('imag13');
let img14 = document.getElementById('imag14');
let img15 = document.getElementById('imag15');
let img16 = document.getElementById('imag16');
let img17 = document.getElementById('imag17');
let img18 = document.getElementById('imag18');
let img19 = document.getElementById('imag19');
let img20 = document.getElementById('imag20');
let img21 = document.getElementById('imag21');
let img22 = document.getElementById('imag22');
let img23 = document.getElementById('imag23');
let img24 = document.getElementById('imag24');
let img25 = document.getElementById('imag25');
let img26 = document.getElementById('imag26');
let img27 = document.getElementById('imag27');
let img28 = document.getElementById('imag28');
let img29 = document.getElementById('imag29');
let img30 = document.getElementById('imag30');
let img31 = document.getElementById('imag31');
let img32 = document.getElementById('imag32');
let img33 = document.getElementById('imag33');
let img34 = document.getElementById('imag34')

let boxEnlace = document.getElementById('boxEnlace');
let boxEnlace2 = document.getElementById('boxEnlace2');
let boxEnlace3 = document.getElementById('boxEnlace3');
let boxEnlace4 = document.getElementById('boxEnlace4');
let boxEnlace5 = document.getElementById('boxEnlace5');
let boxEnlace6 = document.getElementById('boxEnlace6');
let boxEnlace7 = document.getElementById('boxEnlace7');
let boxEnlace8 = document.getElementById('boxEnlace8');
let boxEnlace9 = document.getElementById('boxEnlace9');
let boxEnlace10 = document.getElementById('boxEnlace10');
let boxEnlace11 = document.getElementById('boxEnlace11');

let boxTitulo = document.getElementById('boxTitulo');
let boxTitulo2 = document.getElementById('boxTitulo2');
let boxTitulo3 = document.getElementById('boxTitulo3');
let boxTitulo4 = document.getElementById('boxTitulo4');
let boxTitulo5 = document.getElementById('boxTitulo5');
let boxTitulo6 = document.getElementById('boxTitulo6');
let boxTitulo7 = document.getElementById('boxTitulo7');
let boxTitulo8 = document.getElementById('boxTitulo8');
let boxTitulo9 = document.getElementById('boxTitulo9');
let boxTitulo10 = document.getElementById('boxTitulo10');
let boxTitulo11 = document.getElementById('boxTitulo11');

let enlace = document.getElementById('enlace');
let enlace2 = document.getElementById('enlace2');
let enlace3 = document.getElementById('enlace3');
let enlace4 = document.getElementById('enlace4');
let enlace5 = document.getElementById('enlace5');
let enlace6 = document.getElementById('enlace6');
let enlace7 = document.getElementById('enlace7');
let enlace8 = document.getElementById('enlace8');
let enlace9 = document.getElementById('enlace9');
let enlace10 = document.getElementById('enlace10');
let enlace11 = document.getElementById('enlace11');





img1.addEventListener('click', function () {
    if (boxEnlace.classList.contains('no-ver')) {
        boxEnlace.classList.remove('no-ver');
        boxTitulo.classList.add('no-ver');
    }
    enlace.setAttribute('href', "fuenteN.html");
    enlace.textContent = "Netflix";
    
});
img2.addEventListener('click', function () {
    if (boxEnlace.classList.contains('no-ver')) {
        boxEnlace.classList.remove('no-ver');
        boxTitulo.classList.add('no-ver');
    }
    enlace.setAttribute('href', "fuenteD.html");
    enlace.textContent = "Disney";
    
})
img3.addEventListener('click', function () {
    if (boxEnlace.classList.contains('no-ver')) {
        boxEnlace.classList.remove('no-ver');
        boxTitulo.classList.add('no-ver');
    }
    enlace.setAttribute('href', "fuenteG.html");
    enlace.textContent = "GAME OF THRONES";
    
})
img4.addEventListener('click', function () {
    if (boxEnlace.classList.contains('no-ver')) {
        boxEnlace.classList.remove('no-ver');
        boxTitulo.classList.add('no-ver');
    }
    enlace.setAttribute('href', "fuente_digital.html");
    enlace.textContent = "Fuente digital";
    
})

img5.addEventListener('click', function () {
    if (boxEnlace2.classList.contains('no-ver')) {
        boxEnlace2.classList.remove('no-ver');
        boxTitulo2.classList.add('no-ver');
    }
    enlace2.setAttribute('href', "colores.html");
    enlace2.textContent = "Colores por nombre";
    
});
img6.addEventListener('click', function () {
    if (boxEnlace2.classList.contains('no-ver')) {
        boxEnlace2.classList.remove('no-ver');
        boxTitulo2.classList.add('no-ver');
    }
    enlace2.setAttribute('href', "colores2.html");
    enlace2.textContent = "Colores por RGB";
    
})
img7.addEventListener('click', function () {
    if (boxEnlace2.classList.contains('no-ver')) {
        boxEnlace2.classList.remove('no-ver');
        boxTitulo2.classList.add('no-ver');
    }
    enlace2.setAttribute('href', "colores3.html");
    enlace2.textContent = "Colores por hexadecimal";
})
img8.addEventListener('click', function () {
    if (boxEnlace3.classList.contains('no-ver')) {
        boxEnlace3.classList.remove('no-ver');
        boxTitulo3.classList.add('no-ver');
    }
    enlace3.setAttribute('href', "Span.html");
    enlace3.textContent = "Span";
    
})
img9.addEventListener('click', function () {
    if (boxEnlace3.classList.contains('no-ver')) {
        boxEnlace3.classList.remove('no-ver');
        boxTitulo3.classList.add('no-ver');
    }
    enlace3.setAttribute('href', "span2.html");
    enlace3.textContent = "Span entre textos";
    
})
img10.addEventListener('click', function () {
    if (boxEnlace4.classList.contains('no-ver')) {
        boxEnlace4.classList.remove('no-ver');
        boxTitulo4.classList.add('no-ver');
    }
    enlace4.setAttribute('href', "bordes.html");
    enlace4.textContent = "Bordes";
    
})
img11.addEventListener('click', function () {
    if (boxEnlace4.classList.contains('no-ver')) {
        boxEnlace4.classList.remove('no-ver');
        boxTitulo4.classList.add('no-ver');
    }
    enlace4.setAttribute('href', "aling.html");
    enlace4.textContent = "Alineaciones de texto";
    
})
img12.addEventListener('click', function () {
    if (boxEnlace5.classList.contains('no-ver')) {
        boxEnlace5.classList.remove('no-ver');
        boxTitulo5.classList.add('no-ver');
    }
    enlace5.setAttribute('href', "img.html");
    enlace5.textContent = "Imagenes";
    
})
img34.addEventListener('click', function () {
    if (boxEnlace5.classList.contains('no-ver')) {
        boxEnlace5.classList.remove('no-ver');
        boxTitulo5.classList.add('no-ver');
    }
    enlace5.setAttribute('href', "slaideshow.html");
    enlace5.textContent = "slaideshow";
    
})
img13.addEventListener('click', function () {
    if (boxEnlace5.classList.contains('no-ver')) {
        boxEnlace5.classList.remove('no-ver');
        boxTitulo5.classList.add('no-ver');
    }
    enlace5.setAttribute('href', "background.html");
    enlace5.textContent = "Fondo de pantalla";
    
})
img14.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "menu-icons.html");
    enlace6.textContent = "Iconos";
    
})
img15.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "iconos-tipo.html");
    enlace6.textContent = "menú2";
    
})
img16.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "kayax.html");
    enlace6.textContent = "Menu de vuelo";
    
})
img17.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "media_query.html");
    enlace6.textContent = "@media";
    
})
img18.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "menuResponsive2.html");
    enlace6.textContent = "Menu Responsive";
    
})
img19.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "sena.html");
    enlace6.textContent = "Clon SENA";
    
})
img20.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "menuSubItems.html");
    enlace6.textContent = "Menu con hover";
    
})
img21.addEventListener('click', function () {
    if (boxEnlace6.classList.contains('no-ver')) {
        boxEnlace6.classList.remove('no-ver');
        boxTitulo6.classList.add('no-ver');
    }
    enlace6.setAttribute('href', "unad.html");
    enlace6.textContent = "hover";  
})
img22.addEventListener('click', function () {
    if (boxEnlace7.classList.contains('no-ver')) {
        boxEnlace7.classList.remove('no-ver');
        boxTitulo7.classList.add('no-ver');
    }
    enlace7.setAttribute('href', "box.html");
    enlace7.textContent = "Contenedores";  
})
img23.addEventListener('click', function () {
    if (boxEnlace7.classList.contains('no-ver')) {
        boxEnlace7.classList.remove('no-ver');
        boxTitulo7.classList.add('no-ver');
    }
    enlace7.setAttribute('href', "positation.html");
    enlace7.textContent = "Pocisiones";  
})
img24.addEventListener('click', function () {
    if (boxEnlace7.classList.contains('no-ver')) {
        boxEnlace7.classList.remove('no-ver');
        boxTitulo7.classList.add('no-ver');
    }
    enlace7.setAttribute('href', "flexbox.html");
    enlace7.textContent = "flexbox";  
})
img25.addEventListener('click', function () {
    if (boxEnlace8.classList.contains('no-ver')) {
        boxEnlace8.classList.remove('no-ver');
        boxTitulo8.classList.add('no-ver');
    }
    enlace8.setAttribute('href', "maquetacs.html");
    enlace8.textContent = "Maqueta";  
})
img26.addEventListener('click', function () {
    if (boxEnlace8.classList.contains('no-ver')) {
        boxEnlace8.classList.remove('no-ver');
        boxTitulo8.classList.add('no-ver');
    }
    enlace8.setAttribute('href', "dispaly-grid.html");
    enlace8.textContent = "Display grid";  
})
img27.addEventListener('click', function () {
    if (boxEnlace8.classList.contains('no-ver')) {
        boxEnlace8.classList.remove('no-ver');
        boxTitulo8.classList.add('no-ver');
    }
    enlace8.setAttribute('href', "calendario.html");
    enlace8.textContent = "Calendario";  
})
img28.addEventListener('click', function () {
    if (boxEnlace8.classList.contains('no-ver')) {
        boxEnlace8.classList.remove('no-ver');
        boxTitulo8.classList.add('no-ver');
    }
    enlace8.setAttribute('href', "tabals.html");
    enlace8.textContent = "Reloj";  
})
img29.addEventListener('click', function () {
    if (boxEnlace9.classList.contains('no-ver')) {
        boxEnlace9.classList.remove('no-ver');
        boxTitulo9.classList.add('no-ver');
    }
    enlace9.setAttribute('href', "formulary.html");
    enlace9.textContent = "Formulario";  
})
img30.addEventListener('click', function () {
    if (boxEnlace9.classList.contains('no-ver')) {
        boxEnlace9.classList.remove('no-ver');
        boxTitulo9.classList.add('no-ver');
    }
    enlace9.setAttribute('href', "example-for.html");
    enlace9.textContent = "ejemplo de formulario";  
})
img31.addEventListener('click', function () {
    if (boxEnlace10.classList.contains('no-ver')) {
        boxEnlace10.classList.remove('no-ver');
        boxTitulo10.classList.add('no-ver');
    }
    enlace10.setAttribute('href', "inicio.html");
    enlace10.textContent = "inicio de sesion";  
})
img32.addEventListener('click', function () {
    if (boxEnlace10.classList.contains('no-ver')) {
        boxEnlace10.classList.remove('no-ver');
        boxTitulo10.classList.add('no-ver');
    }
    enlace10.setAttribute('href', "sesion2.html");
    enlace10.textContent = "inicio de sesion";  
})
img33.addEventListener('click', function () {
    if (boxEnlace11.classList.contains('no-ver')) {
        boxEnlace11.classList.remove('no-ver');
        boxTitulo11.classList.add('no-ver');
    }
    enlace11.setAttribute('href', "carrito.html");
    enlace11.textContent = "Carrito de compras";  
})
