
const password = "!@#";





var check = function() {
    if(document.getElementById("password").value == password) {
        window.location.replace("Different.html");

    }
    if(document.getElementById("password").value == "118") {
        document.getElementById("problem").innerHTML = "Correct!";

    }

}