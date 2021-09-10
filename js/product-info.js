//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function verInfo(name){
    localStorage.setItem("producto",JSON.stringify({imgname}));
    window.location = "product-info.html";
}
function mostrarInfo(array){

    let information = "";
    for(let i = 0; i < array.length; i++){
        let img = array[i];

    }
    information += "Nombre:"+img.name+"<br>";
    information += "Descripcion:"+img.description+"<br>";
    information += "Precio:"+"USD"+img.costo+"<br>";
    information += "Stock:"+img.soldCount+"<br>";
    information += "Categoria:"+img.categoría+"<br>";
    information += "Productos Relacionados:"+img.productosRelacionados+"<br>";
     information += `<button style="float :right;" onclick="Mas Info(`+ img.name +`)">Mas Info</button><br>`
}
document.getElementById("infopr").innerHTML= information;


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       productes = resultObj.data;
       
       mostrarInfo(array);
     }
      
    });
    
 });