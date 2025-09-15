// script.js

function copy() {
    const copyText = document.getElementById('outputText');
    navigator.clipboard.writeText(copyText.value);


}













function encryptMessage() {
    const message = document.getElementById('inputText').value;
    const secretKey = document.getElementById('secretKey').value;
    const outputText = document.getElementById('outputText');

    if (!message || !secretKey) {
        alert("Please enter both a message and a secret key.");
        return;
    }

    try {
        // Encrypting using AES
        // CryptoJS.AES.encrypt(plaintext, key)
        const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
        outputText.value = encrypted;
    } catch (error) {
        console.error("Encryption error:", error);
        alert("An error occurred during encryption.");
    }
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('inputText').value; // Use the same text area to paste the encrypted message
    const secretKey = document.getElementById('secretKey').value;
    const outputText = document.getElementById('outputText');

    if (!encryptedMessage || !secretKey) {
        alert("Please enter the encrypted message and the secret key.");
        return;
    }

    try {
        // Decrypting using AES
        // CryptoJS.AES.decrypt(ciphertext, key)
        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8); // Convert to UTF-8 string
        outputText.value = originalText;
    } catch (error) {
        console.error("Decryption error:", error);
        alert("An error occurred during decryption. Make sure the message and key are correct.");
        outputText.value = "Decryption failed.";
    }
}