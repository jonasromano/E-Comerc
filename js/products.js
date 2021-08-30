//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productes = [];
var minCount = undefined;
var maxCount = undefined;





function mostrarProductos(array){
  let product ="<hr>";
  for(let i = 0; i < array.length; i++){
    let producto = array[i];
    
    product += "Nombre:" +producto.name +"<br>";
    product += "Descripcion:" +producto.description +"<br>";
    product += "Precio:" + "U$S" +producto.cost + "<br>";
    product += "Stock:" +producto.soldCount + "<br>";

  }
  document.getElementById("lista").innerHTML = product;
}

function mostrarImagenes(){

  let imagenes = "";
  for(let i = 0; i < productes.length; i++){
      let img = productes[i];

      if (((minCount == undefined) || (minCount != undefined && parseInt(img.productCount) >= minCount)) &&
          ((maxCount == undefined) || (maxCount != undefined && parseInt(img.productCount) <= maxCount))){

          imagenes += `
          <a href="products.html" class="list-group-item list-group-item-action">
              <div class="row">
                  <div class="col-3">
                      <img src="` + img.imgSrc + `" alt="` + img.description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ img.name +`</h4>
                          <small class="text-muted">` + img.soldCount +` artículos</small><br>
                          <big class="text-muted">` + "U$S" + img.cost + `</big>
                      </div>
                      <p class="mb-1">` + img.description + `</p>
                  </div>
              </div>
          </a>
          `
      }

      document.getElementById("lista").innerHTML = imagenes;
  }
}




document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       productes = resultObj.data;
       mostrarProductos(productes);
       mostrarImagenes(productes);
     }
      
    });
    
 });

