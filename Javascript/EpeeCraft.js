$('document').ready(function() {

	var epeeBois = $("#epeeBois");
	var epeeBoisPrix = [1,1,0];
	var niveauEpeeBois = 0;
	var armeEquipement = $(".epee");

	var prixBoisEpeeBois = $("#prixBoisEpeeBois");
	var prixCuirEpeeBois = $("#prixCuirEpeeBois");
	var prixFerEpeeBois = $("#prixFerEpeeBois");
	var epeeBoisText = $('#epeeBoisText');

	document.onload = function () { 
    	afficherPrixEpeeBois();
  	}

  	function afficherPrixEpeeBois () {
  		afficherPrixBoisEpeeBois();
  		afficherPrixCuirEpeeBois();
  		afficherPrixFerEpeeBois();
  	}

  	function afficherPrixBoisEpeeBois () {
    	prixBoisEpeeBois.text(epeeBoisPrix[0]);
 	}

 	function afficherPrixCuirEpeeBois () {
    	prixCuirEpeeBois.text(epeeBoisPrix[1]);
 	}

 	function afficherPrixFerEpeeBois () {
    	prixFerEpeeBois.text(epeeBoisPrix[2]);
 	}

 	function setPrixEpeeBois() {
		/*epeeBoisPrix[0] += 1;
		epeeBoisPrix[1] += 1;
		epeeBoisPrix[2] += 1;*/

		niveauEpeeBois++;
		afficherPrixBoisEpeeBois();
	    afficherPrixCuirEpeeBois();
	    afficherPrixFerEpeeBois();
	    console.log(niveauEpeeBois);
 	}

	epeeBois.click(function(){
		if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
			&& epeeBoisPrix[2] <= nombreDeFer){
			let audio = new Audio("Sons/sonEnclume.mp3");
	    	audio.play();
			armeEquipement.attr('src', "images/epeeboisactive.png");
			nombreDeBois = nombreDeBois - epeeBoisPrix[0];
			nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
			nombreDeBois = nombreDeBois - epeeBoisPrix[2];
			setPrixEpeeBois();
		}else{
			alert("Il vous faut plus de ressources pour fabriquer votre épée en bois.");
		}
	});

});