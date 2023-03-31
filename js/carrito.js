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
    boxImg2.classList.remove("border");
    boxImg4.classList.remove("border");

    imgMini3.classList.add("opacy");
    imgMini2.classList.remove("opacy");
    imgMini2.classList.remove("opacy");
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