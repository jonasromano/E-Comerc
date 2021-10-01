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
       let informationCategoryHTML = document.getElementById("informationCategory");
       
   
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
    <div id="stars" class="fa fa-star checked">`+comment.score+`</div>
    <div id="y" class="row container p-2 m-3">
    <p id="x"class="row container p-2 m-3">`+comment.description+`</p></div>
    <p> USUARIO :`+comment.user+` <br> <div class="col text-right">Fecha: `+comment.dateTime+`</div></p>
    </div>
    <hr>
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


function estrellitas(){
  var elements = document.getElementsByName("rating");
  for(var i=0;i<elements.lentgth ;i++){
    if(elements[i].checked){
      return parseInt(elements[i].value);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("stars").innerHTML= `
  <div id="stars" class="star-rating">
  <input id="star-5" type="radio" name="rating" value="5" />
  <label for="star-5" title="5 stars">
    <i class="active fa fa-star"></i>
  </label>

    <input id="star-4" type="radio" name="rating" value="4" />
  <label for="star-4" title="4 stars">
    <i class="active fa fa-star"></i>
  </label>

  <input id="star-3" type="radio" name="rating" value="3" />
  <label for="star-3" title="3 stars">
    <i class="active fa fa-star"></i>
  </label>

  <input id="star-2" type="radio" name="rating" value="2" />
  <label for="star-2" title="2 stars">
    <i class="active fa fa-star"></i>
  </label>

  <input id="star-1" type="radio" name="rating" value="1"  />
  <label for="star-1" title="1 stars">
    <i class="active fa fa-star"></i>
  </label>
  </div>
  `;
});

function newComentario(){
  let newcoment ={
    score: getRating(),
    description: document.getElementById('comentario').value,
    usuario: JSON.parse(localStorage.getItem('losDatos')).email
  };
  newComentario.push(newcoment);
  mostrarComents(comments, newComentario);
  document.getElementById('comentario').value= "";
   }