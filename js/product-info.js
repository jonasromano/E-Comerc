//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product = [];

function infoProductes(product){

    let infop = "<hr>";
    for(let i = 0; i < product.length; i++){
        let inf = product[i];
        {
        infop +=
      infop += "Nombre:" +inf.nombre +"<br>";
      infop += "Descripcion:" +inf.description +"<br>";
      infop += "Precio:" + "U$S" +inf.costo + "<br>";
      infop += "Stock:" +inf.soldCount + "<br>";
      infop += "Categoria:" +inf.categoría + "<br>";

   }
   document.getElementById("infopr").innerHTML = infop;
}
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok"){
            product = resultObj.data;
        infoProductes(product);
        }
    });

});