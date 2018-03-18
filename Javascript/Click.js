

$('document').ready(function() {
   
  baseInterval = 1000;

  var image = document.getElementById("enclume");
  var resultat = document.getElementById("Indicateur");

  var nombreDeFer = 0;

  var nbMarteau = 0;
  let marteau = $("#marteau");
  var achatMart = document.getElementById('nbMarteau');
  
  var nbForgeron = 0;
  var autoForgeron = 0;
  let forgeron = $("#forgeron");
  var achatForgeron = document.getElementById('nbForgeron');


  function afficherScore () {
    resultat.innerHTML = "Ressources : " + nombreDeFer;
  }
 
 function update () {
  console.log('update');
  nombreDeFer += autoForgeron;
  afficherScore();
 }

  marteau.click( function () {
    if(nombreDeFer >= 10) {
      nbMarteau++;
      achatMart.innerHTML = nbMarteau;
      nombreDeFer -= 10;
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });

  forgeron.click( function () {
    if(nombreDeFer >= 1500) {
      nbForgeron++;
      autoForgeron += 1;
      achatForgeron.innerHTML = nbForgeron;
      nombreDeFer -= 1500;
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });

  image.addEventListener("click", function () {
      nombreDeFer = nombreDeFer + 1;
      afficherScore();
  });

  window.setInterval( function() {
    update();
  },baseInterval);

});
