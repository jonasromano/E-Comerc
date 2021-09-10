//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var infe = [];
var infop = [];
var img =[];

function infoProductes(infe){

   let infop = "";
   let img = "";

   infop +=`
   ${infe.nombre}<br>
   ${infe.description}<br>
   ${infe.costo}<br>
   ${infe.soldCount}
   ${infe.categoria}<br>
   `;

   document.getElementById("infopr").innerHTML = infop;
   document.getElementById("infopr").innerHTML = img;
 }
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok"){
            product = resultObj.data;
        infoProductes(infe);
        }
    });

});