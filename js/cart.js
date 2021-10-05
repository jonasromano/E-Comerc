//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articles = [];

function mostrarCarrito(){

  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];


          carro += `
              <div class="row">
                 
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ carri.name +`</h4>
                          <small class="text-muted">` + carri.count +` artículos</small><br>
                          <big class="text-muted">` + carri.currency + carri.unitCost + `</big>
                      </div>
                      <p class="mb-1">` + carri.src + `</p>
                  </div>
              </div>
         
          `
      }

      document.getElementById("carro").innerHTML = carro;
  
}




document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       articles = resultObj.data;
       
       mostrarCarrito(articles);
     }
      
    });
    
 });


