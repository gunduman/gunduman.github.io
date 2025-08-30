

var encode = function(){
var text = document.getElementById("toCode").value
var encoded = [];



for(let i = 0; i < text.length; i++) {
    encoded.push(text.charCodeAt(i))
};

for(let i = 0; i < text.length; i++) {
    encoded[i] = encoded[i].toString(16)
};
console.log("encoded: ", encoded);
for(let i = 0; i < text.length; i++) {
    encoded[i] = encoded[i].toString()
};
encoded = encoded.join("")
document.getElementById('encoded').innerHTML = encoded
};
