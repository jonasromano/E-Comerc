//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articles = [];


//Funcion para mostrar los articulos del carrito seleccionados.
function mostrarCarrito(articles){
 
  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];
      let r = (carri.unitCost * carri.count); 
      
      
          carro += `
          <tr id="carri${i}">
          <div class="row justify-content">
          <div class="col-md">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ carri.name +`</h4>
                          <p>
                          <img class="img-fluid img-thumbnail" src="` + carri.src + `" alt="" width="100" height="100">
                          </p>
                          <div class="d-block mb-4 h-100">
                        
                          <div class="col">
                          <big class="text">Cantidad de articulos <input class="form-control" value=` + carri.count +` onchange="grupal(`+i+`,`+carri.unitCost+`)" type="number" placeholder="2" id="cantidad`+i+`" ></big><br>
                          <div class="container" id="car">
                          <big class="text" id="dola">Precio unitario:` + carri.currency + carri.unitCost + `</big>
                          </div>
                      </div>
                      </div>
                </div>
             </div>
         </div>
         <div class="col-md" style='text-align:right' ">
              <h1> Subtotal:<strong class="h4 text-success Subtotal" id="subs`+i+`">`+r+`</strong></h1>
              <button class="btn btn-danger" onclick="eliminar(${i})">Eliminar Articulo x</button>
              </div>
              </tr>
              <hr>   
          `
      }

      document.getElementById("miCarro").innerHTML = carro;
  
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(NEW_CART_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       articles = resultObj.data;
     }
     mostrarCarrito(articles.articles);
     
    });
    
 });
 
 function grupal(cantidad,valor){
   let subs = document.getElementById('cantidad'+cantidad).value;
   let sub= (subs * valor);
   document.getElementById('subs'+cantidad).innerHTML = sub;
   subtotal();
 }  //Funcion que toma los valores de la cantidad de productos para poder usarlos en la siguiente funcion.

 function subtotal(){
   let valor= 0;
   let subs = document.getElementsByClassName('Subtotal');
   let doc = document.getElementById('valor');
   for(let i= 0;i<subs.length;i++){
     valor += parseInt(subs[i].innerHTML);
   }
   doc.innerHTML = valor;
 } //Funcion para calcular el subtotal.

 
function dolar(currency){
  let dol= document.getElementById("dola"+currency).value;
  let dolares = (dol * 40);
  document.getElementById("subs").innerHTML=dolares;
  subtotal();
} // Intento de funcion para modificar el calculo del dolar(Aun no esta echa)
 


function tarjeta(){
  let datoTarjeta= {
      dato1: document.getElementById('nmtar').value,
      dato2: document.getElementById('vencimiento').value,
      dato3: document.getElementById('seguridad').value
  };

  let tarJson= JSON.stringify(datoTarjeta);

  localStorage.setItem('tarjetaso', tarJson);
}




//Funcion para validar 

let nmtar =document.getElementById("nmtar");
nmtar.setCustomValidity("invalid");
nmtar.addEventListener("input",()=>{
  if(nmtar.value === " "){
    nmtar.setCustomValidity("");
  }else{
    nmtar.setCustomValidity("invalid");
  }
});

function validando(){
  document.getElementById("value").classList.add('was-validated');
}

let form = document.getElementById("form")
form.addEventListener('submit',function(event){
  if(!form.checkValidity()){
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')
});


//Funcion validacion de bootstrap
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

function eliminar(i){
  if(articles.length > 1){
    articles.splice(i,1);
    document.getElementById(`carri${i}`).remove();
  }
}