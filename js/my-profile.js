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
    document.getElementById("registro").innerHTML = datos;

}
function llamada(){
    if(localStorage.getItem('perfile')){
      perfil=localStorage.getItem('perfile');
      perfile=JSON.parse(perfil);
      document.getElementById('pnombre').innerHTML=perfile.date1
      document.getElementById('papellidos').innerHTML=perfile.date2
      document.getElementById('pcorreo').innerHTML=perfile.date4
      document.getElementById('ptelefono').innerHTML=perfile.date5//Click para ver//
    }else{
      document.getElementById('r').innerHTML = 'No hay datos'
    }
    
  }



document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("registro");("click", function(){
        let Nombre = document.getElementById("name");
        let Apellido = document.getElementById("subname");
        let Contraseña = document.getElementById("inputPassword4");
        let Correo = document.getElementById("inputEmail4");
        let Telefono = document.getElementById("phone");
        let camposCompletos = true; 
 
        if(Nombre.value === " "){
            Nombre.classList.add("invalid");
            camposCompletos = false;
        }else{
            Nombre.classList.remove("invalid");
        }
        if(Apellido.value === " "){
            Apellido.classList.add("invalid");
            camposCompletos = false;
        }else{
            Apellido.classList.remove("invalid");
        }
        if(Contraseña.value === " "){
            Contraseña.classList.add("invalid");
            camposCompletos = false;
        }else{
            Contraseña.classList.remove("invalid");
        }
        if(Correo.value === " "){
            Correo.classList.add("invalid");
            camposCompletos = false;
        }else{
            Correo.classList.remove("invalid");
        }
        if(Telefono.value === " "){
            Telefono.classList.add("invalid");
            camposCompletos = false;
        }else{
            Telefono.classList.remove("invalid");
        }
        if(camposCompletos){
            getJSONData().then(function(resultado){
                if(resultado.status === "ok"){
                    usersArray = resultado.data;
                    if(validateUser(usersArray,Nombre.value,Apellido.value,Contraseña.value,Correo.value,Telefono.value)){
                        window.location = 'my-profile.html';
                    }else{
                        alert("Usuario o contraseña incorrectas!");
                    }
                }
            });
        }else{
            alert("Debes ingresar los datos!")
        }
    });

});