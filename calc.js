var append = function(num) {
    document.getElementById("output").value += num;
}

var clear = function() {
    document.getElementById("output").value = "";
}

var calculate = function() {
    document.getElementById("output").value = eval(document.getElementById("output").value);
}