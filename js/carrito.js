let imgBox = document.getElementById("imgBox");
let boxImg1 = document.getElementById("boxImg1");
let boxImg2 = document.getElementById("boxImg2");
let boxImg3 = document.getElementById("boxImg3");
let boxImg4 = document.getElementById("boxImg4");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

function imagen1() {
  imgBox.setAttribute("src", ("img/image-product-1.jpg")); 
  boxImg2.classList.remove("border");
  boxImg3.classList.remove("border");
  boxImg4.classList.remove("border");
  boxImg1.classList.add("border");

  imgMini1.classList.add("opacy");
  imgMini2.classList.remove("opacy");
  imgMini3.classList.remove("opacy");
  imgMini4.classList.remove("opacy");
}

 function imagen2() {
    imgBox.setAttribute("src", ("img/image-product-2.jpg"));
    boxImg1.classList.remove("border");
    boxImg3.classList.remove("border");
    boxImg4.classList.remove("border");
    boxImg2.classList.add("border");
    

    imgMini2.classList.add("opacy");
    imgMini1.classList.remove("opacy");
    imgMini3.classList.remove("opacy");
    imgMini4.classList.remove("opacy");
};
function imagen3() {
    imgBox.setAttribute("src", ("img/image-product-3.jpg"));
    boxImg3.classList.add("border");
    boxImg2.classList.remove("border");
    boxImg1.classList.remove("border");
    boxImg4.classList.remove("border");

    imgMini3.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini1.classList.remove("opacy");
    imgMini4.classList.remove("opacy");
};
function imagen4() {
    imgBox.setAttribute("src", ("img/image-product-4.jpg"));
    boxImg4.classList.add("border");
    boxImg1.classList.remove("border");
    boxImg3.classList.remove("border");
    boxImg2.classList.remove("border");

    imgMini4.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini3.classList.remove("opacy");
    imgMini1.classList.remove("opacy");
};

imgMini1.addEventListener("click", imagen1);
imgMini2.addEventListener("click", imagen2);
imgMini3.addEventListener("click", imagen3);
imgMini4.addEventListener("click", imagen4);

const mas=document.querySelector('#mas');
const menos=document.querySelector('#menos');
const boxCard=document.querySelector('#boxCard');
let boxCanasta= document.getElementById("boxCanasta");
const valorCart=document.querySelector('#valorCart');
const valorPago=document.querySelector('#valorPago');
let boxBody =document.getElementById('boxBody');
const contador = document.querySelector('#contador');
const total=document.querySelector('#boxTotal');
const unidades = document.querySelector('#unidades')
let boxEmpty = document.getElementById('boxEmpty');
let boxCompras = document.getElementById('boxCompras');
let exit=document.getElementById('boxExit');
let delate=document.getElementById('boxDelate');

let valorContador=0;
let valorTotal=0;

boxCanasta.addEventListener('click', function () {
  if (boxCompras.classList.contains('cart-body-hiden')) {
    boxCompras.classList.add('list');
    boxCompras.classList.remove('cart-body-hiden');
  }else{
    boxCompras.classList.remove('list');
    boxCompras.classList.add('cart-body-hiden');
  }
})
exit.addEventListener('click', function () {
  boxCompras.classList.remove('list');
  boxCompras.classList.add('cart-body-hiden');
})
delate.addEventListener('click', function () {
  boxEmpty.classList.remove('cart-body-hiden');
  boxEmpty.classList.add('span-vacio');
  boxBody.classList.add('cart-body-hiden');
  boxBody.classList.remove('cart-body');
  boxCanasta.classList.remove('canasta-new')
})
function aumentarContador() {
  valorContador++;
  valorTotal=125*valorContador;
  unidades.textContent=`Unidades: ${valorContador}`;
  contador.textContent = valorContador;
  total.textContent = `Precio: $${valorTotal}.00`;
  valorCart.textContent = `125.00*${valorContador}`;
  valorPago.textContent = `$${valorTotal}.00`;
}
function disminuirContador() {
  if (valorContador > 0) {
    valorContador--;
    valorTotal=125*valorContador;
    unidades.textContent=`Unidades: ${valorContador}`;
    contador.textContent = valorContador;
    total.textContent = `Precio: $${valorTotal}.00`
    valorCart.textContent = `125.00*${valorContador}`;
    valorPago.textContent = `$${valorTotal}.00`;
  }
  if(valorContador == 0){
    boxEmpty.classList.remove('cart-body-hiden');
    boxEmpty.classList.add('span-vacio');
    boxBody.classList.add('cart-body-hiden');
    boxBody.classList.remove('cart-body');
  }
}

mas.addEventListener('click', aumentarContador);
menos.addEventListener('click', disminuirContador);

boxCard.addEventListener('click', function () {
  if (valorContador != 0) {
    alert('Su pedido ha sido reservado con éxito. ¡Gracias por confiar en nosotros!')
    boxCanasta.classList.add("canasta-new");
    boxBody.classList.add('cart-body');
    boxBody.classList.remove('cart-body-hiden');
    boxEmpty.classList.add('cart-body-hiden');
    boxEmpty.classList.remove('span-vacio');
  }
  if(valorContador == 0){
    alert('su pedido es invalido intente nuevamente');
  }
});
let imgBoxbody = document.getElementById("imgBoxBody");
let boxImgbody1 = document.getElementById("boxImgBody1");
let boxImgbody2 = document.getElementById("boxImgBody2");
let boxImgbody3 = document.getElementById("boxImgBody3");
let boxImgbody4 = document.getElementById("boxImgBody4");
let imgMinibody1 = document.getElementById("imgMiniBody1");
let imgMinibody2 = document.getElementById("imgMiniBody2");
let imgMinibody3 = document.getElementById("imgMiniBody3");
let imgMinibody4 = document.getElementById("imgMiniBody4");
let imgBody = document.getElementById('imgBody');
let exitBOdy= document.getElementById('bodyExit');
let contar =0;

imgBox.addEventListener('click', function () {
  imgBody.classList.add('img-body');
  imgBody.classList.remove('img-body-none');
});
exitBOdy.addEventListener('click', function () {
  imgBody.classList.remove('img-body');
   imgBody.classList.add('img-body-none');
});

//espacio para la funcion de la animacion

function animacion() {
      if (imgBoxbody.classList.contains('animation')) {
        imgBoxbody.classList.remove('animation');
        imgBoxbody.classList.add('animation2');
      }else{
        imgBoxbody.classList.add('animation');
        imgBoxbody.classList.remove('animation2');
      };

}

function imagBody1() { 
  animacion();
  imgBoxbody.setAttribute("src", ("img/image-product-1.jpg"));
  boxImgbody2.classList.remove("border");
  boxImgbody3.classList.remove("border");
  boxImgbody4.classList.remove("border");
  boxImgbody1.classList.add("border");

  imgMinibody1.classList.add("opacy");
  imgMinibody2.classList.remove("opacy");
  imgMinibody3.classList.remove("opacy");
  imgMinibody4.classList.remove("opacy");
  imagen1();
  contar= 4;
};
function imagBody2() {
  animacion();
  imgBoxbody.setAttribute("src", ("img/image-product-2.jpg"));
  boxImgbody1.classList.remove("border");
  boxImgbody3.classList.remove("border");
  boxImgbody4.classList.remove("border");
  boxImgbody2.classList.add("border");
  

  imgMinibody2.classList.add("opacy");
  imgMinibody1.classList.remove("opacy");
  imgMinibody3.classList.remove("opacy");
  imgMinibody4.classList.remove("opacy");
  imagen2();
  contar= 1;
};
function imagBody3() {
  animacion();
  imgBoxbody.setAttribute("src", ("img/image-product-3.jpg"));
  boxImgbody3.classList.add("border");
  boxImgbody2.classList.remove("border");
  boxImgbody1.classList.remove("border");
  boxImgbody4.classList.remove("border");

  imgMinibody3.classList.add("opacy");
  imgMinibody2.classList.remove("opacy");
  imgMinibody1.classList.remove("opacy");
  imgMinibody4.classList.remove("opacy");
  imagen3();
  contar= 2;
};
function imagBody4() {
  animacion();
  imgBoxbody.setAttribute("src", ("img/image-product-4.jpg"));
  boxImgbody4.classList.add("border");
  boxImgbody1.classList.remove("border");
  boxImgbody3.classList.remove("border");
  boxImgbody2.classList.remove("border");

  imgMinibody4.classList.add("opacy");
  imgMinibody2.classList.remove("opacy");
  imgMinibody3.classList.remove("opacy");
  imgMinibody1.classList.remove("opacy");
  imagen4();
  contar= 3;
};

imgMinibody1.addEventListener("click", imagBody1);
imgMinibody2.addEventListener("click", imagBody2);
imgMinibody3.addEventListener("click", imagBody3);
imgMinibody4.addEventListener("click", imagBody4);

let btnNex=document.querySelector('#btnNex');
let btnBefore=document.querySelector('#btnBefore');

function imgNex() { 
  contar = contar +1;
   if (contar > 4) {
    contar=1;
  } 
  cambio();
}
function imgbefore() {
  contar = contar -1;
  if (contar < 1) {
    contar=4;
  }
  cambio();
}
function cambio() {
  if (contar == 1) {
    imagBody2();
  }
  if (contar == 2) {
    imagBody3();
  }
  if (contar == 3) {
    imagBody4();
  }
  if (contar==4) {
    imagBody1();
  }
}

btnNex.addEventListener('click', imgNex);
btnBefore.addEventListener('click',imgbefore);