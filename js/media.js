let barMenu =document.getElementById("barMenu");
let mainMenu =document.getElementById('mainMenu');

barMenu.addEventListener('click', function(){
    if (mainMenu.classList.contains("mainMenu")) {
        mainMenu.classList.add("main-menu-visible");
        mainMenu.classList.remove("mainMenu");
    }else{
        mainMenu.classList.remove("main-menu-visible");
        mainMenu.classList.add("mainMenu");
    }
});