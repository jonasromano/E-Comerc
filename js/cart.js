//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articles = [];


function mostrarCarrito(articles){

  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];


          carro += `
          <div class="card text-dark bg-white mb-3 mx-auto" style="width: 35rem;" id="car">
          <div class="grid">
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
                          <big class="text" id="dola">` + carri.currency + carri.unitCost + `</big>
                      </div>
                      </div>
    </div>
    </div>
              </div>
              </div>
          `
      }

      document.getElementById("miCarro").innerHTML = carro;
  
}

var articles = [];


function mostrar(articles){

  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];
      let r = (carri.unitCost * carri.count); 

          carro += `
<div class="card text-white bg-dark mb-3 mx-auto" style="width: 35rem; position:left;" >
    <div class="row justify-content-end">
    <div class="col-md">
    <h1> Subtotal:<strong class="h4 text-success Subtotal" id="subs`+i+`">`+"$"+r+`</strong></h1>         
    <h1> Total:</h1>
    <div class="btn-group dropend">
    <button type="button" class="btn btn-primary text-dark" data-toggle="modal" data-target="#exampleModal">
    Forma de pago
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalLabel">Forma de pago</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body ">
  <li><div class="form-check">
  <input class="form-check-input " type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label text-dark" for="gridRadios1">
    Tarjeta
  </label>
</div></li>
  <li><div class="form-check">
  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label text-dark" for="gridRadios1">
    Efectivo
  </label>
</div></li>
  <li><div class="form-check">
  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label text-dark" for="gridRadios1">
    Transferencia
  </label>
</div></li>
  </ul>
</div>
<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>
<div class="btn-group dropend">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    ENVIO
  </button>
  <form>
  <div class="mb-3">
    <label for="calle" class="form-label">Calle</label>
    <input type="calle" class="form-control" id="calle" aria-describedby="calle">
    <div id="emailHelp" class="form-text">Ingrese su dirección y numero de puerta.</div>
  </div>
  <div class="mb-3">
    <label for="esquina" class="form-label">Esquina</label>
    <input type="esquina" class="form-control" id="esquina">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  <ul class="dropdown-menu">
  <li><div class="form-check">
  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label" for="gridRadios1">
    Premium
  </label>
</div></li>
  <li><div class="form-check">
  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label" for="gridRadios1">
    Express
  </label>
</div></li>
  <li><div class="form-check">
  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
  <label class="form-check-label" for="gridRadios1">
    Standard
  </label>
</div></li>
  </ul>
</div>
    </div>
    </div>
    </div>
  </div>
  `
}

document.getElementById("de").innerHTML = carro;

}




document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(NEW_CART_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       articles = resultObj.data;
     }
     mostrarCarrito(articles.articles);
     mostrar(articles.articles);
    });
    
 });
 
 function grupal(cantidad,valor){
   let subs = document.getElementById('cantidad'+cantidad).value;
   let sub= (subs * valor);
   document.getElementById('subs'+cantidad).innerHTML = sub;
   subtotal();
 }

 function subtotal(){
   let valor= 0;
   let subs = document.getElementsByClassName('Subtotal');
   let doc = document.getElementById('valor');
   for(let i= 0;i<subs.length;i++){
     valor += parseInt(subs[i].innerHTML);
   }
   doc.innerHTML = valor;
 }

 
function dolar(currency){
  let dol= document.getElementById("dola"+currency).value;
  let dolares = (dol * 40);
  document.getElementById("subs").innerHTML=dolares;
  subtotal();
}
 

