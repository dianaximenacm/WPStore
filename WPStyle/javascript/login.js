var login = document.getElementById("login");
var logout = document.getElementById("logout");
var loginUser = document.getElementById("titulo-bienvenida");

if (localStorage.getItem('name')) {
    loginUser.innerHTML = "Super Bienvenida para "+localStorage.getItem( 'name' )+ " de parte de Women Programmers Style (WPS)"
}

function login1() {
    var user = prompt("Escribe tu nombre");
    if (user == null || user == "") {
        alert("Ups! Olvidaste ingresar la info solicitada")
    } else {
        localStorage.setItem('name', user);
        loginUser.innerHTML = "Bienvenido "+localStorage.getItem( 'name ' )+ " de parte de Women Programmers Style (WPS)";

    }
}

function logout1() {
    loginUser.innerHTML = "Bienvenido";
    localStorage.clear();
}
