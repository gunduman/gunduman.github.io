

let send = document.getElementById("send");
let chat = document.getElementById("chat");
let message = document.getElementById("message");


send.addEventListener("click", function() {
    chat.innerHTML = chat.innerHTML + "\n" + message.value;
    chat.style.whiteSpace = "pre-line";
})