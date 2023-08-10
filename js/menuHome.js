let container=document.getElementById('idContainer');
let find = document.getElementById('idGlass');
let findSpace = document.getElementById('idFind');
let exit = document.getElementById('idExit');



find.addEventListener('click', function () {
    if (container.classList.contains('container')) {
        container.classList.add('none');
        container.classList.remove('container');

        findSpace.classList.remove('none');
        findSpace.classList.add('find');
    }
} );

exit.addEventListener('click', function () {
    if (container.classList.contains('none')) {
        container.classList.remove('none');
        container.classList.add('container');

        findSpace.classList.add('none');
        findSpace.classList.remove('find');
    }
})