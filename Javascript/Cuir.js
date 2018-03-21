var nombreDeCuir = 0;
$('document').ready(function() {
  

  baseInterval = 1000;


  var image = document.getElementById("cuir");
  var resultat = document.getElementById("IndicateurCuir");
  
  var cuirParClick = 1;


  let scie = $("#scie");
  var nbScie = 0;
  var prixScie = 10;
  var achatScie = document.getElementById('nbScie');
  var spanPrixScie = $("#prixScie");

  
  let tanneur = $("#tanneur");
  var nbTanneur = 0;
  var autoTanneur = 0;
  var prixTanneur = 1000;
  var achatTanneur = document.getElementById('nbTanneur');
  var spanPrixTanneur = $("#prixTanneur");
  

  document.onload = function () { 
    afficherScore();
  }


  function afficherScore () {
    resultat.innerHTML = nombreDeCuir;
    afficherPrixScie();
    afficherPrixTanneur();
  }


  function afficherPrixScie (){
    spanPrixScie.text(prixScie);
  }
 

  function afficherPrixTanneur (){
    spanPrixTanneur.text(prixTanneur);
  }


  function update () {
    nombreDeCuir += autoTanneur;
    afficherScore();
  }


  scie.click( function () {
    if(nombreDeCuir >= prixScie) {
      nbScie++;
      achatScie.innerHTML = nbScie;
      nombreDeCuir -= prixScie;
      prixScie *= 3;
      cuirParClick *= 2;
      afficherPrixScie();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  tanneur.click( function () {
    if(nombreDeCuir >= prixTanneur) {
      nbTanneur++;
      autoTanneur += 5;
      achatTanneur.innerHTML = nbTanneur;
      nombreDeCuir -= prixTanneur;
      prixTanneur *= 2;
      afficherPrixTanneur();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  image.addEventListener("click", function () {
      nombreDeCuir += cuirParClick;
      afficherScore();
  });


  window.setInterval( function() {
    update();
  },baseInterval);


});
