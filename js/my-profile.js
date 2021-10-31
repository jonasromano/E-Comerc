//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function profile(){
    let datos = {
        date1: document.getElementById('name').value,
        date2: document.getElementById('subname').value,
        date3: document.getElementById('inputPassword4').value,
        date4: document.getElementById('inputEmail4').value,
        date5: document.getElementById('phone').value
    };
    let perfil = JSON.stringify(datos);
    localStorage.setItem('perfile',perfil);
}
function alerta(){
    
}


document.addEventListener("DOMContentLoaded", function (e) {

});