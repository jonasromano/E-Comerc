//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productes = [];
var criteria = undefined;
var minCount = undefined;
var maxCount = undefined;
const ORDER_ASC_BY_PRICE = "0-15200";
const ORDER_DESC_BY_PRICE = "15200-0";
const ORDER_BY_PROD_COUNT = "Cant."

function rangoProductos(criteria,array){
  let rango = [];
  if (criteria === ORDER_ASC_BY_PRICE)
  {
    result = array.sort(function(a, b){
      if ( a.price < b.price){ return -1; }
      if ( a.price > b.price ){ return 1; }
            return 0;
    });
  }else if (criteria === ORDER_DESC_BY_PRICE){
    result = array.sort(function(a, b) {
        if ( a.price > b.price ){ return -1; }
        if ( a.price < b.price ){ return 1; }
        return 0;
    });
}else if (criteria === ORDER_BY_PROD_COUNT){
  result = array.sort(function(a, b) {
      let aCount = parseInt(a.productCount);
      let bCount = parseInt(b.productCount);

      if ( aCount > bCount ){ return -1; }
      if ( aCount < bCount ){ return 1; }
      return 0;
  });
}

return result;
}



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

function criteriaANDarray( criteria, productes){
  SortCriteria = criteria
  if(productes != undefined){
     productesArray = productes;
  }
  productesArray = rangoProductos(SortCriteria,productesArray);
  mostrarImagenes();
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


 document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCTS_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          criteriaANDarray(ORDER_ASC_BY_PRICE, resultObj.data);
      }
  });

  document.getElementById("valor").addEventListener("click", function(){
      criteriaANDarray(ORDER_ASC_BY_PRICE);
  });

  document.getElementById("valor").addEventListener("click", function(){
      criteriaANDarray(ORDER_DESC_BY_PRICE);
  });


  document.getElementById("clearRangeFilter").addEventListener("click", function(){
      document.getElementById("rangeFilterCountMin").value = "";
      document.getElementById("rangeFilterCountMax").value = "";

      minCount = undefined;
      maxCount = undefined;

      mostrarImagenes();
  });

  document.getElementById("rangeFilterCount").addEventListener("click", function(){
      //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
      //de productos por categoría.
      minCount = document.getElementById("rangeFilterCountMin").value;
      maxCount = document.getElementById("rangeFilterCountMax").value;

      if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
          minCount = parseInt(minCount);
      }
      else{
          minCount = undefined;
      }

      if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
          maxCount = parseInt(maxCount);
      }
      else{
          maxCount = undefined;
      }

      mostrarImagenes();
  });
});
