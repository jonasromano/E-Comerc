//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var array=PRODUCT_INFO_URL;

function mostrarInfo(array){

    let img = array[localStorage.getItem('name')];
    let information = "";
    
    information += `
    information += "Nombre:"+img.name+"<br>";
    information += "Descripcion:"+img.description+"<br>";
    information += "Precio:"+"USD"+img.costo+"<br>";
    information += "Stock:"+img.soldCount+"<br>";
    information += "Categoria:"+img.categoría+"<br>";
    information += "Productos Relacionados:"+img.productosRelacionados+"<br>";
    `
}

document.getElementById("infopr").innerHTML=

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       InfoArray= resultObj.data;
       
       mostrarInfo(InfoArray);
     }
      
    });
    
 });