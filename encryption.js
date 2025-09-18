// script.js

function copy() {
    const copyText = document.getElementById('outputText');
    navigator.clipboard.writeText(copyText.value);


}



function encryptMessage() {
    const message = document.getElementById('inputText').value;
    const secretKey = document.getElementById('secretKey').value;
    const outputText = document.getElementById('outputText');

    try {
        const encrypted = CryptoJS.AES.encrypt(message, secretKey);
        outputText.value = encrypted;
    }
    catch(error) {
        alert("ERROR OCCURED");
    }
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('inputText').value; 
    const secretKey = document.getElementById('secretKey').value;
    const outputText = document.getElementById('outputText');



    if (secretKey == "password") {
        outputText.value = "Do you know how long yesterday's homework has to be?";
        
    }
    else {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    const OGtext = decrypted.toString(CryptoJS.enc.Utf8);
    outputText.value = OGtext;

    }

    
}