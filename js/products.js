//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productes = [];
var minCount = undefined;
var maxCount = undefined;



function mostrarImagenes(){

  let imagenes = "";
  for(let i = 0; i < productes.length; i++){
      let img = productes[i];

      if (((minCount == undefined) || (minCount != undefined && parseInt(img.cost) >= minCount)) &&
          ((maxCount == undefined) || (maxCount != undefined && parseInt(img.cost) <= maxCount))){

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
       
       mostrarImagenes(productes);
     }
      
    });
    
 });



document.getElementById("filtrar").addEventListener("click",function(){

  minCount = document.getElementById("range-min").value;
  maxCount = document.getElementById("range-max").value;

  if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
    minCount = parseInt(minCount);
  }
  else {
    minCount = undefined;
  }

  if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
    maxCount = parseInt(maxCount);
  }
  else {
    maxCount = undefined;
  }
    mostrarImagenes(productes);
  
});
