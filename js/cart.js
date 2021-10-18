//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articles = [];


function mostrarCarrito(articles){

  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];
      let r = (carri.unitCost * carri.count);


          carro += `
          <div class="card text-dark bg-white mb-3" style="width: 50rem; position: left;" id="car">
          <div class="grid">
          <div class="g-col-6">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ carri.name +`</h4>
                          <p>
                          <img class="img-fluid img-thumbnail" src="` + carri.src + `" alt="">
                          </p>
                          <div class="d-block mb-4 h-100">
                        
                          <div class="col">
                          <big class="text">Cantidad de articulos <input class="form-control" value=` + carri.count +` onchange="grupal(`+i+`,`+carri.unitCost+`)" type="number" placeholder="2" id="cantidad`+i+`" ></big><br>
                          <big class="text">` + carri.currency + carri.unitCost + `</big>
                      </div>
              </div>
              </div>
              <div class="card text-white bg-dark mb-3" style="width: 40rem; position: right;" >
    <div class="row justify-content-end">
    <div class="col">
    <h1> Subtotal:<strong class="h4 text-success Subtotal" id="subs`+i+`">`+"$"+r+`</strong></h1>         
    <h1> Total:</h1>
    <h2> <div class="btn-group dropend">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Envio
    </button>
    <ul class="dropdown-menu" >
    <li><a class="btn-group dropend-item" href="#"></a></li>
    <li><a class="btn-group dropend-item" href="#"></a></li>
    <li><a class="btn-group dropend-item" href="#"></a></li>
    </ul>
  </div></h2>
    <div class="btn-group dropend">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Metodo de PAGO
  </button>
  <ul class="dropdown-menu" >
  <li><a class="btn-group dropend-item" href="#">Tarjeta</a></li>
  <li><a class="btn-group dropend-item" href="#">Efectivo</a></li>
  <li><a class="btn-group dropend-item" href="#">Mercado Pago</a></li>
  </ul>
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

 
function dolar(){
  if ( currency === "USD"){
    return unitCost * 40 ;
  }else{
    "cantidad"
  }
  
}
 

