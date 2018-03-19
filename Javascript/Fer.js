$('document').ready(function() {
  

  baseInterval = 1000;
  let titre = $("title");

  var image = document.getElementById("lingotFer");
  var resultat = document.getElementById("IndicateurFer");
  var nombreDeFer = 0;
  var ferParClick = 1;


  let marteau = $("#marteau");
  var nbMarteau = 0;
  var prixMarteau = 10;
  var achatMart = document.getElementById('nbMarteau');
  var spanPrixMarteur = $("#prixMarteau");

  
  let forgeron = $("#forgeron");
  var nbForgeron = 0;
  var autoForgeron = 0;
  var prixForgeron = 1000;
  var achatForgeron = document.getElementById('nbForgeron');
  var spanPrixForgeron = $("#prixForgeron");
  

  document.onload = function () { 
    afficherScore();
  }


  function afficherScore () {
    resultat.innerHTML = nombreDeFer;
    titre.text(nombreDeFer + " Fer");
    afficherPrixMarteau();
    afficherPrixForgeron();
  }


  function afficherPrixMarteau (){
    spanPrixMarteur.text(prixMarteau);
  }
 

  function afficherPrixForgeron (){
    spanPrixForgeron.text(prixForgeron);
  }


  function update () {
    nombreDeFer += autoForgeron;
    afficherScore();
  }


  marteau.click( function () {
    if(nombreDeFer >= prixMarteau) {
      nbMarteau++;
      achatMart.innerHTML = nbMarteau;
      nombreDeFer -= prixMarteau;
      prixMarteau *= 3;
      ferParClick *= 2;
      afficherPrixMarteau();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  forgeron.click( function () {
    if(nombreDeFer >= prixForgeron) {
      nbForgeron++;
      autoForgeron += 5;
      achatForgeron.innerHTML = nbForgeron;
      nombreDeFer -= prixForgeron;
      prixForgeron *= 2;
      afficherPrixForgeron();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  image.addEventListener("click", function () {
      nombreDeFer += ferParClick;
      afficherScore();
  });


  window.setInterval( function() {
    update();
  },baseInterval);


});