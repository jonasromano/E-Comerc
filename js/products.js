//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productes = [];

function mostrarProductos(array){
  let product ="<hr>";
  for(let i = 0; i < array.length; i++){
    let producto = array[i];

    product += "Nombre:" +producto.name +"<br>";
    product += "Descripcion:" +producto.description +"<br>";
    product += "Precio:" +producto.cost + "<br>";

  }
  document.getElementById("lista").innerHTML = product;
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       productes = resultObj.data;
       mostrarProductos(productes);
     }
      
    });
 });