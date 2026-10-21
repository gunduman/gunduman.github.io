// Gets the buttons

const BlooketButton = document.getElementById("BlooketButton");
const KahootButton = document.getElementById("KahootButton");
// Gets the code element the user entered

const CodeElement = document.getElementById("code");

// Creates event listeners

BlooketButton.addEventListener("click",GoToBlooket);
KahootButton.addEventListener("click",GoToKahoot);


var GoToBlooket = function() {
    code = CodeElement.value;
    alert(code)

}
