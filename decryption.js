



var decode = function() {
var decoded = ""
var encoded = document.getElementById("toDecode").value
var encoded_array = []
for(var i = 0; i < encoded.length; i++){
    var toPush = "";
    toPush += encoded[i]
    i++
    toPush += encoded[i]
    encoded_array.push(toPush)
}
for(var i = 0; i < encoded_array.length; i++) {
    encoded_array[i] = parseInt(encoded_array[i],16)
}

for(var i = 0; i < encoded_array.length; i++) {
    decoded += String.fromCharCode(encoded_array[i])
}
document.getElementById('decoded').innerHTML = decoded
}