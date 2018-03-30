var nombreDeFer = 0;
var ferParClick = 1;
var autoForgeron = 0;

$('document').ready(function() {
  

  baseInterval = 1000;
  let titre = $("title");
  var zoom = 0;

  var image = document.getElementById("lingotFer");
  var resultat = document.getElementById("IndicateurFer");
  


  let marteau = $("#clickMarteau");
  var nbMarteau = 0;
  var prixMarteau = 10;
  var achatMart = document.getElementById('nbMarteau');
  var spanPrixMarteur = $("#prixMarteau");

  
  let forgeron = $("#clickForgeron");
  var nbForgeron = 0;
  var prixForgeron = 1000;
  var achatForgeron = document.getElementById('nbForgeron');
  var spanPrixForgeron = $("#prixForgeron");
  

  document.onload = function () { 
    afficherScore();
  }

  $('#modeCombat').click(function(){
    localStorage.setItem("fer",nombreDeFer);
  })

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
      if(zoom === 0){
        image.style.width="187px";
        image.style.height="125px";
        zoom = 1;
      }else{
        image.style.width="180px";
        image.style.height="118px";
        zoom = 0;
      }
  });


  window.setInterval( function() {
    update();
  },baseInterval);


});
