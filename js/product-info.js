//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var information = {};

function mostrarInfo(array){

  let infop ="";
  for(let i = 0 ; i < array.length; i++){
    let  imageSrc = array[i];

    infop +=`
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `
  }
  document.getElementById("img").innerHTML= infop;

}



document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) { 
     if (resultObj.status === "ok") {
       information = resultObj.data;

       let informationNameHTML = document.getElementById("informationName");
       let descriptionHTML = document.getElementById("description");
       let soldCountHTML = document.getElementById("soldCount");
       let informationCostHTML = document.getElementById("informationCost");
       let informationCategoryHTML = document.getElementById("informationCategory")
   
       informationNameHTML.innerHTML = information.name;
       descriptionHTML.innerHTML = information.description;
       soldCountHTML.innerHTML = information.soldCount+" "+"unidades disponibles";
       informationCostHTML.innerHTML = "USD"+" "+ information.cost;
       informationCategoryHTML.innerHTML = information.category;
     }
     mostrarInfo(information.images);
    });
    
 });

 var comments = [];

 function mostrarComents(array){
   let comentario = "";
   for(let i = 0 ; i < array.length; i++){
    let  comment = array[i];

    comentario +=`
    <div>`+comment.score+`</div><br>
    <p>`+comment.description+`</p><br>
    <p>`+comment.user+`</p><br>
    <p>`+comment.dateTime+`</p><br>
    `
 }
 document.getElementById("coments").innerHTML= comentario;
}

document.addEventListener("DOMContentLoaded",function(e){
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if(resultObj.status === "ok"){
      comments = resultObj.data;
    }
    mostrarComents(comments);
  })
})