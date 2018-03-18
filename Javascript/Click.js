

$('document').ready(function() {
   
  let marteau = $("#marteau");

  var nombreDeFer = 0;
  var nbMarteau = 0;

  var achatMart = document.getElementById('nbMarteau');
  var image = document.getElementById("enclume");
  var resultat = document.getElementById("Indicateur");

  function afficherScore () {
    resultat.innerHTML = "Ressources : " + nombreDeFer;
  }
 

  marteau.click( function () {
    if(nombreDeFer >= 10) {
      nbMarteau = nbMarteau + 1;
      achatMart.innerHTML = nbMarteau;
      nombreDeFer = nombreDeFer - 10;
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });

  image.addEventListener("click", function () {
      nombreDeFer = nombreDeFer + 1;
      afficherScore();
  });

});
