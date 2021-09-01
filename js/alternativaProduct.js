function mostrarProductos(array){
    let product ="<hr>";
    for(let i = 0; i < array.length; i++){
      let producto = array[i];
  
      if (((minCount == undefined) || (minCount != undefined && parseInt(producto.cost) >= minCount)) &&
      ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.cost) <= maxCount))){
  
      product += "Nombre:" +producto.name +"<br>";
      product += "Descripcion:" +producto.description +"<br>";
      product += "Precio:" + "U$S" +producto.cost + "<br>";
      product += "Stock:" +producto.soldCount + "<br>";
  
    }
    document.getElementById("lista").innerHTML = product;
  }
  }