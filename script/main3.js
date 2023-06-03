let chat_widget = document.querySelector('.chat-widget');
let chat_widget__side = document.querySelector('.chat-widget__side');
console.log(chat_widget);
let arrNew = ['Здравствуйте, что я могу сделать для вас?',
'Обратитесь по номеру телефона +79528610356'];
let close = document.querySelector('.close')
let messages_container = document.querySelector('.chat-widget__messages-container')
let data;
function getDate(){
    data = new Date()
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    data = h + ":" + m + ":" + s;
}
getDate()


chat_widget__side.addEventListener('click', function () {
    chat_widget.classList.add('chat-widget_active')
    widget__messages.innerHTML += `
            <div class="message">
            <div class="message__time">${data}</div>
            <div class="message__text">${arrNew[0]}</div>
        </div>`;
})
close.addEventListener('click', function () {
    chat_widget.classList.remove('chat-widget_active');

})

let widget__messages = document.querySelector('.chat-widget__messages');
let widget__input = document.querySelector('.chat-widget__input');


document.addEventListener('keyup', function (event) {
    getDate()
    if (event.keyCode == 13) {

        if (widget__input.value != "") {
            widget__messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${data}</div>
            <div class="message__text">${widget__input.value}</div>
        </div>`
            widget__input.value = '';
            widget__messages.innerHTML += `
            <div class="message">
            <div class="message__time">${data}</div>
            <div class="message__text">${arrNew[1]}</div>
        </div>`
        }
        messages_container.scrollTop = messages_container.scrollHeight;
    }
})
