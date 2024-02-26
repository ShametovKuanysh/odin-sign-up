const password = document.getElementById("password");
const password_c = document.getElementById("password_c");

password.addEventListener("input", (event) => {
    if (password.value != password_c.value){
        document.getElementById("error").innerHTML = "* Passwords do not match"
    } else {
        document.getElementById("error").innerHTML = ""
    }
});

password_c.addEventListener("input", (event) => {
    if (password.value != password_c.value){
        document.getElementById("error").innerHTML = "* Passwords do not match"
    } else {
        document.getElementById("error").innerHTML = ""
    }
});