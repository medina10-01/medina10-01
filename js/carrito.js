let imgBox = document.getElementById("imgBox");
let boxImg1 = document.getElementById("boxImg1");
let boxImg2 = document.getElementById("boxImg2");
let boxImg3 = document.getElementById("boxImg3");
let boxImg4 = document.getElementById("boxImg4");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");



imgMini1.addEventListener("click", function () {
    imgBox.setAttribute("src", ("img/image-product-1.jpg"));
    
    boxImg2.classList.remove("border");
    boxImg3.classList.remove("border");
    boxImg4.classList.remove("border");
    boxImg1.classList.add("border");

    imgMini1.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini3.classList.remove("opacy");
    imgMini4.classList.remove("opacy");

});
imgMini2.addEventListener("click", function () {
    imgBox.setAttribute("src", ("img/image-product-2.jpg"));
    
    boxImg1.classList.remove("border");
    boxImg3.classList.remove("border");
    boxImg4.classList.remove("border");
    boxImg2.classList.add("border");
    

    imgMini2.classList.add("opacy");
    imgMini1.classList.remove("opacy");
    imgMini3.classList.remove("opacy");
    imgMini4.classList.remove("opacy");
});
imgMini3.addEventListener("click", function () {
    imgBox.setAttribute("src", ("img/image-product-3.jpg"));
    boxImg3.classList.add("border");
    boxImg2.classList.remove("border");
    boxImg1.classList.remove("border");
    boxImg4.classList.remove("border");

    imgMini3.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini1.classList.remove("opacy");
    imgMini4.classList.remove("opacy");
});
imgMini4.addEventListener("click", function () {
    imgBox.setAttribute("src", ("img/image-product-4.jpg"));
    boxImg4.classList.add("border");
    boxImg1.classList.remove("border");
    boxImg3.classList.remove("border");
    boxImg2.classList.remove("border");

    imgMini4.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini3.classList.remove("opacy");
    imgMini1.classList.remove("opacy");
});


const mas=document.querySelector('#mas');
const menos=document.querySelector('#menos');
const boxCard=document.querySelector('#boxCard');
let boxCanasta= document.getElementById("boxCanasta");
const valorCart=document.querySelector('#valorCart');
const valorPago=document.querySelector('#valorPago');
let boxBody =document.getElementById('boxBody');
const contador = document.querySelector('#contador');
const total=document.querySelector('#boxTotal');
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
  contador.textContent = valorContador;
  total.textContent = `Total: $${valorTotal}.00`;
  valorCart.textContent = `125.00*${valorContador}`;
  valorPago.textContent = `$${valorTotal}.00`;
}
function disminuirContador() {
  if (valorContador > 0) {
    valorContador--;
    valorTotal=125*valorContador;
    contador.textContent = valorContador;
    total.textContent = `Total: $${valorTotal}.00`
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
})