//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var articles = [];

function mostrarCarrito(articles){

  let carro = "";
  for(let i = 0; i < articles.length; i++){
      let carri= articles[i];


          carro += `
          <div class="container"id="car">
          <div class="row">
              <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ carri.name +`</h4>
                          <p>
                          <img class="img-fluid img-thumbnail" src="` + carri.src + `" alt="">
                          </p>
                          <div class="d-block mb-4 h-100">
                        
                          <div class="col">
                          <big class="text">` + carri.count +` artículos</big><br>
                          <big class="text">` + carri.currency + carri.unitCost + `</big>
                      </div>
              </div>
              
              <div class="col">
              <p> Subtotal:</p>
              <h1> Total:</h1>
              <h2> Envio:</h2>
              </div>
              </div>
              
          `
      }

      document.getElementById("miCarro").innerHTML = carro;
  
}




document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       articles = resultObj.data;

       let nameHTML= document.getElementById("name");
       let countHTML= document.getElementById("count");
       let unitCostHTML= document.getElementById("unitCost");

       nameHTML.innerHTML= articles.name;
       countHTML.innerHTML= articles.count;
       unitCostHTML.innerHTML= articles.unitCost;


       
       
     }
     mostrarCarrito(articles.articles);
    });
    
 });


