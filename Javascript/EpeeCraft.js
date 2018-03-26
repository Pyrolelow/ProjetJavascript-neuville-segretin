$('document').ready(function() {

	var epeeBois = $("#epeeBois");
	var epeeBoisPrix = [50,20,0];
	var niveauEpeeBois = 1;
	var armeEquipement = $(".epee");

	var prixBoisEpeeBois = $("#prixBoisEpeeBois");
	var prixCuirEpeeBois = $("#prixCuirEpeeBois");
	var prixFerEpeeBois = $("#prixFerEpeeBois");
	var epeeBoisText = $('#epeeBoisText');
	var niveauEpee = $('#niveauEpeeBois');

  	function afficherNiveauEpeeBois(){
  		niveauEpee.text(niveauEpeeBois);
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
		epeeBoisPrix[0] += 50;
		epeeBoisPrix[1] += 25;
		epeeBoisPrix[2] += 5;

		afficherPrixBoisEpeeBois();
	    afficherPrixCuirEpeeBois();
	    afficherPrixFerEpeeBois();

		niveauEpeeBois++;

	    if(niveauEpeeBois===11){
	    	epeeBoisText.replaceWith('<p><img id="epeeBois" class="itemImage" src="images/epee_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauEpeeBois=10;
	    }

	    afficherNiveauEpeeBois();
 	}

	epeeBois.click(function(){
		if(niveauEpeeBois <=10){
			if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
				&& epeeBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/epeeboisactive.png");
				nombreDeBois = nombreDeBois - epeeBoisPrix[0];
				nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
				nombreDeFer = nombreDeFer - epeeBoisPrix[2];
				setPrixEpeeBois();
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});