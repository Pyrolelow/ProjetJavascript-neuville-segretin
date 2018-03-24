var nombreDeBois = 0;
var boisParClick = 1;
var autoBucheron = 0;

$('document').ready(function() {
  

  baseInterval = 1000;
  var zoom = 0;
  

  var image = document.getElementById("bois");
  var resultat = document.getElementById("IndicateurBois");


  let hache = $("#clickHache");
  var nbHache = 0;
  var prixHache = 10;
  var achatHache = document.getElementById('nbHache');
  var spanPrixHache = $("#prixHache");

  
  let bucheron = $("#clickBucheron");
  var nbBucheron = 0;
  
  var prixBucheron = 1000;
  var achatBucheron = document.getElementById('nbBucheron');
  var spanPrixBucheron = $("#prixBucheron");
  

  document.onload = function () { 
    afficherScore();
  }


  function afficherScore () {
    resultat.innerHTML = nombreDeBois;
    afficherPrixHache();
    afficherPrixBucheron();
  }


  function afficherPrixHache (){
    spanPrixHache.text(prixHache);
  }
 

  function afficherPrixBucheron (){
    spanPrixBucheron.text(prixBucheron);
  }


  function update () {
    nombreDeBois += autoBucheron;
    afficherScore();
  }


  hache.click( function () {
    if(nombreDeBois >= prixHache) {
      nbHache++;
      achatHache.innerHTML = nbHache;
      nombreDeBois -= prixHache;
      prixHache *= 3;
      boisParClick *= 2;
      afficherPrixHache();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  bucheron.click( function () {
    if(nombreDeBois >= prixBucheron) {
      nbBucheron++;
      autoBucheron += 5;
      achatBucheron.innerHTML = nbBucheron;
      nombreDeBois -= prixBucheron;
      prixBucheron *= 2;
      afficherPrixBucheron();
      afficherScore();
    }else{
      alert("Continuez vos efforts !");
    }
  });


  image.addEventListener("click", function () {
      nombreDeBois += boisParClick;
      afficherScore();
      if(zoom === 0){
        image.style.width="177px";
        image.style.height="137px";
        zoom = 1;
      }else{
        image.style.width="170px";
        image.style.height="130px";
        zoom = 0;
      }
  });


  window.setInterval( function() {
    update();
  },baseInterval);


});
