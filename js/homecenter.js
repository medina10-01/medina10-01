lupa = document.getElementById('lupa');
containerMobile = document.getElementById('containerMobile');
search = document.getElementById('search');
xHidden = document.getElementById('xHidden');

let iconArrowLeft = document.getElementById("iconArrowLeft");
let iconArrowRight = document.getElementById("iconArrowRight");
let idSlider = document.getElementById("idSlider");
let boxBtn1 = document.getElementById("boxBtn1");
let boxBtn2 = document.getElementById("boxBtn2");
let boxBtn3 = document.getElementById("boxBtn3");
let boxBtn4 = document.getElementById("boxBtn4");


let exitStyle = document.getElementById("exitStyle");
let formAna = document.getElementById("formAna");


exitStyle.addEventListener("click", function () {
    if (formAna.classList.contains("form-ana")) {
        formAna.style.display = "none";
        formAna.classList.remove("form-ana");
    } else {
        formAna.style.display = "grid";
        formAna.classList.add("form-ana");
    }
});




iconArrowLeft.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-1");
        idSlider.classList.remove("slider-view-2");
        iconArrowRight.style.display = "flex";
        iconArrowLeft.style.display = "none";
        boxBtn2.classList.remove("btn-select");
        boxBtn1.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-3");
        iconArrowRight.style.display = "flex";
        boxBtn2.classList.add("btn-select");
        boxBtn3.classList.remove("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-4")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-4");
        iconArrowRight.style.display = "flex";
        boxBtn4.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");
    }
});


iconArrowRight.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-1")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-1");
        boxBtn1.classList.remove("btn-select");
        boxBtn2.classList.add("btn-select");
        iconArrowLeft.style.display = "flex"; 
    }
    else if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-2");
        boxBtn2.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-4");
        idSlider.classList.remove("slider-view-3");
        boxBtn3.classList.remove("btn-select");
        boxBtn4.classList.add("btn-select");
        iconArrowRight.style.display = "none";
    }
});
















lupa.addEventListener("click", function() {
    containerMobile.style.display = 'none'; 
    search.style.display = 'flex'; 
    xHidden.addEventListener("click",function(){
        search.style.display = 'none';
        containerMobile.style.display = 'flex'; 
    });
});



// containerXAnna = document.getElementById('containerXAnna');
// containerAna = document.getElementById('containerAna');
// containerChat = document.getElementById('containerChat');
// containerChatAll = document.getElementById('containerChatAll');


// containerAna.addEventListener("click",function(){
//     containerChat.style.display = 'none';
//     containerXAnna.style.display = 'flex';
//     containerChatAll.style.display = 'block';
//     containerXAnna.addEventListener("click",function(){
//         containerXAnna.style.display = 'none';
//         containerChat.style.display = 'flex';
//         containerChatAll.style.display = 'none';
//     })
// });





