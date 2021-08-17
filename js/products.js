//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

document.addEventListener("DOMContentLoaded", function (e) {
     Response.JSON(PRODUCTS_URL).then(function(e){ 
     if (e.status === "ok");
   });
})
