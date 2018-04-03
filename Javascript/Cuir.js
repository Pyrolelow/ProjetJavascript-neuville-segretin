var nombreDeCuir = 0;
var cuirParClick = 1;
var autoTanneur = 0;
var nbCouteau = 0;
var prixCouteau = 10;
var nbTanneur = 0;
var prixTanneur = 1000;

$('document').ready(function() {
  

  baseInterval = 1000;
  var zoom = 0;


  var image = document.getElementById("cuir");
  var resultat = document.getElementById("IndicateurCuir");
  

  let couteau = $("#clickCouteau");
  var achatCouteau = document.getElementById('nbCouteau');
  var spanPrixCouteau = $("#prixCouteau");

  
  let tanneur = $("#clickTanneur");
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
      if(zoom === 0){
        image.style.width="137px";
        image.style.height="142px";
        zoom = 1;
      }else{
        image.style.width="130px";
        image.style.height="135px";
        zoom = 0;
      }
  });


  window.setInterval( function() {
    update();
  },baseInterval);


});
