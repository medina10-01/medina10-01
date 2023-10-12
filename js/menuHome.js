let container=document.getElementById('idContainer');
let find = document.getElementById('idGlass');
let findSpace = document.getElementById('idFind');
let exit = document.getElementById('idExit');
let botAna = document.getElementById('botAna');
let anaLook = document.getElementById('anaLook');
let botAnaCircle = document.getElementById('botAnaCircle');
let chatAna = document.getElementById('chatAna')



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
botAna.addEventListener('click',  function () {
    if (botAna.classList.contains('bot-ana')) {
        botAna.classList.add('bot-ana-circle');
        botAna.classList.remove('bot-ana');

        anaLook.classList.remove('ana-look');
        anaLook.classList.add('none-bot');

        botAnaCircle.classList.remove('none-bot');
        botAnaCircle.classList.add('ana-txt');

        chatAna.classList.remove('chat-ana-empty');
        chatAna.classList.remove('none-bot');
        chatAna.classList.add('chat-ana');
    } else {
        botAna.classList.remove('bot-ana-circle');
        botAna.classList.add('bot-ana')

        anaLook.classList.add('ana-look');
        anaLook.classList.remove('none-bot');

        botAnaCircle.classList.add('none-bot');
        botAnaCircle.classList.remove('ana-txt');

        chatAna.classList.add('chat-ana-empty');
        chatAna.classList.remove('chat-ana');
    }
})