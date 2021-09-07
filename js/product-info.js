//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productes = [];

function infoProductes(){
    let infop = "";
    for(let i = 0; i < productes.length; i++){
        let inf = productes[i];{

        infop +=`
        <a href="products.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + inf.imagenes + `" alt="` + inf.nombre + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ inf.nombre +`</h4>
                        <h4 class="mb-1">`+ inf.description +`</h4>
                        <small class="text-muted">` + inf.soldCount +` artículos</small><br>
                        <big class="text-muted">` + "U$S" + inf.costo + `</big>
                    </div>
                    <p class="mb-1">` + img.categoria + `</p>
                    <p class="mb-1">` + img.productosrelacionados + `</p>
                </div>
            </div>
        </a>
        `
   }
   document.getElementById("lista").innerHTML = infop;
}
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productes = resultObj.data;
        infoProductes(productes);
        }
    })

});