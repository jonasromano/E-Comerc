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
              <div class="col-md-4">
          <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
          
                  <div class="bd-placeholder-img card-img-top" >
                      <img src="` + img.imgSrc + `" alt="` + img.description + `" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="m-3">`+ img.name +`</h4>
                          <small class="text-muted">` + img.soldCount +` artículos</small><br>
                          <big class="text-muted">` + "U$S" + img.cost + `</big>
                      </div>
                      <p class="card-body">` + img.description + `</p>
                  </div>
                  </a>
                  </div>
              
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

document.getElementById("limpiar").addEventListener("click", function (){
  document.getElementById("range-min").value = "";
  document.getElementById("range-max").value = "";

  minCount = undefined;
  maxCount = undefined;

  mostrarImagenes(productes);
})

function sortProduct(array){
  return array.sort(
    function(a,b){
      if(a.cost < b.cost){return -1 ;}
      if(a.cost > b.cost){return 1 ;}
      return 0;
    }
  )
}

function sortProductdsc(array){
  return array.sort(
    function (a,b){
      if(b.cost > a.cost){return 1;}
      if(b.cost < a.cost){return -1;}
      return 0;
    }
  )
}
function sortRelevancia(array){
  return array.sort(
    function (a,b){
      if(a.soldCount < b.soldCount){return -1;}
      if(a.soldCount > b.soldCount){return 1;}
      return 0;
    }
  )
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("asc").addEventListener("click", function(){
    productes = sortProduct(productes);
    mostrarImagenes(productes);
  })

  document.getElementById("dsc").addEventListener("click", function(){
    productes = sortProductdsc(productes);
    mostrarImagenes(productes);
  })
  document.getElementById("relevancia").addEventListener("click",function(){
    productes = sortRelevancia(productes);
    mostrarImagenes(productes);
  })
});

function mostrar(productes){
  let imagenes ="";
  for(let i = 0; i < productes.length; i++){

    let img = productes[i];
    if(img.name.toLowerCase().includes(buscar)){
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
    document.getElementById("lista").innerHTML = imagenes
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buscar").addEventListener('input', function () {

      buscar = document.getElementById("buscar").value.toLowerCase();

      mostrar(productes);

  });
   });