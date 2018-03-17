

$('document').ready(function() {
   
  let marteau = $("#marteau");

  var nombreDeFer = 0;
  var nbMarteau = 0;
  
  console.log(marteau);
  var achatMart = document.getElementById('nbMarteau');
  /*var marteau = $('tr:gt(0)').find('td:first');
  var guerrier=$('tr:gt(0)').find('td').eq(1);
  var mineur=$('tr:gt(0)').find('td').eq(2);
  var forgeron=$('tr:gt(0)').find('td').eq(3);
  var forge=$('tr:gt(0)').find('td:get(3)');*/

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
