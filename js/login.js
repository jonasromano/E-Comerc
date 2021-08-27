//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
   document.getElementById("submitBtn");("click", function(){
       let Contraseña = document.getElementById("Contraseña");
       let Correo = document.getElementById("Correo");
       let camposCompletos = true; 
       
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
       if(camposCompletos){
           getJSONData().then(function(resultado){
               if(resultado.status === "ok"){
                   usersArray = resultado.data;
                   if(validateUser(usersArray,Contraseña.value,Correo.value)){
                       window.location = 'index.html';
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

    function estorage(){
        let misDatos= {
            dato1: document.getElementById('Contraseña').value,
            dato2: document.getElementById('Correo electronico').value
        };

        let elJson= JSON.stringify(misDatos);

        localStorage.setItem('losDatos', elJson);
    }
