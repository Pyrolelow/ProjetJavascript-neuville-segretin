

$('document').ready(function() {
   

  let marteau = $("#marteau");
  var spanPrixMarteur = $("#prixMarteau");
  let titre = $("title");
  var nombreDeFer = 0;
  var nbMarteau = 0;
  var Ferparclick = 1;
  var PrixMarteau = 10;

  baseInterval = 1000;

  var image = document.getElementById("enclume");

  var resultat = document.getElementById("Indicateur");
  var achatMart = document.getElementById('nbMarteau');
  
  var nbForgeron = 0;
  var autoForgeron = 0;
  let forgeron = $("#forgeron");
  var achatForgeron = document.getElementById('nbForgeron');


  
  document.onload = function () { 
      afficherScore();
      afficherPrixMarteau();
  }



  function afficherScore () {
    resultat.innerHTML = "Ressources : " + nombreDeFer;
    titre.text(nombreDeFer + " Fer");
    afficherPrixMarteau();
  }

  function afficherPrixMarteau (){
    spanPrixMarteur.text(PrixMarteau);
  }
 
 function update () {
  console.log('update');
  nombreDeFer += autoForgeron;
  afficherScore();
 }

  marteau.click( function () {
    if(nombreDeFer >= PrixMarteau) {
      nbMarteau = nbMarteau + 1;
      achatMart.innerHTML = nbMarteau;
      nombreDeFer = nombreDeFer - PrixMarteau;
      PrixMarteau = PrixMarteau*3;
      Ferparclick = Ferparclick * 2;
    }else{
      alert("Continuez vos efforts !");
    }
  });

  forgeron.click( function () {
    if(nombreDeFer >= 1000) {
      nbForgeron++;
      autoForgeron += 5;
      achatForgeron.innerHTML = nbForgeron;
      nombreDeFer -= 1000;
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

  window.setInterval( function() {
    update();
  },baseInterval);

});
