

$('document').ready(function() {
   
  let marteau = $("#marteau");
  var spanPrixMarteur = $("#prixMarteau");
  let titre = $("title");
  console.log(spanPrixMarteur);
  var nombreDeFer = 0;
  var nbMarteau = 0;
  var Ferparclick = 1;
  var PrixMarteau = 10;
  var achatMart = document.getElementById('nbMarteau');
  var image = document.getElementById("enclume");
  var resultat = document.getElementById("Indicateur");

  
  document.onload = function () { 
      afficherScore();
      afficherPrixMarteau();
  }



  function afficherScore () {
    resultat.innerHTML = "Ressources : " + nombreDeFer;
    titre.text(nombreDeFer + " Fer");
  }

  function afficherPrixMarteau (){
    spanPrixMarteur.text(PrixMarteau);
  }
 

  marteau.click( function () {
    if(nombreDeFer >= PrixMarteau) {
      nbMarteau = nbMarteau + 1;
      achatMart.innerHTML = nbMarteau;
      nombreDeFer = nombreDeFer - PrixMarteau;
      PrixMarteau = PrixMarteau*3;
      Ferparclick = Ferparclick * 2;
      afficherScore();
      afficherPrixMarteau();
    }else{
      alert("Continuez vos efforts !");
    }
  });

  image.addEventListener("click", function () {
      nombreDeFer = nombreDeFer + Ferparclick;
      afficherScore();
  });

});
