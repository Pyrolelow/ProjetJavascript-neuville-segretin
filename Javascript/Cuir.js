var nombreDeCuir = 0;
$('document').ready(function() {
  

  baseInterval = 1000;


  var image = document.getElementById("cuir");
  var resultat = document.getElementById("IndicateurCuir");
  
  var cuirParClick = 1;


  let couteau = $("#couteau");
  var nbCouteau = 0;
  var prixCouteau = 10;
  var achatCouteau = document.getElementById('nbCouteau');
  var spanPrixCouteau = $("#prixCouteau");

  
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
    afficherPrixCouteau();
    afficherPrixTanneur();
  }


  function afficherPrixCouteau (){
    spanPrixCouteau.text(prixCouteau);
  }
 

  function afficherPrixTanneur (){
    spanPrixTanneur.text(prixTanneur);
  }


  function update () {
    nombreDeCuir += autoTanneur;
    afficherScore();
  }


  couteau.click( function () {
    if(nombreDeCuir >= prixCouteau) {
      nbCouteau++;
      achatCouteau.innerHTML = nbCouteau;
      nombreDeCuir -= prixCouteau;
      prixCouteau *= 3;
      cuirParClick *= 2;
      afficherPrixCouteau();
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
