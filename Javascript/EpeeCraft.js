var niveauEpee = 1;

$('document').ready(function() {

	var epeeBois = $("#epeeBois");
	var epeeBoisPrix = [5,2,0];
	var armeEquipement = $(".epee");

	var prixBoisEpeeBois = $("#prixBoisEpeeBois");
	var prixCuirEpeeBois = $("#prixCuirEpeeBois");
	var prixFerEpeeBois = $("#prixFerEpeeBois");
	var epeeBoisText = $('#epeeBoisText');
	var niveauEpee = $('#niveauEpeeBois');

  	function afficherNiveauEpeeBois(){
  		niveauEpee.text(niveauEpee);
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
		epeeBoisPrix[0] = 50*niveauEpee;
		epeeBoisPrix[1] = 25*niveauEpee;
		epeeBoisPrix[2] = 5*niveauEpee;

		afficherPrixBoisEpeeBois();
	    afficherPrixCuirEpeeBois();
	    afficherPrixFerEpeeBois();

		niveauEpee++;

	    if(niveauEpee===10){
	    	epeeBoisText.replaceWith('<p><img id="epeeBois" class="itemImage" src="images/epee_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauEpee=10;
	    }

	    afficherNiveauEpeeBois();
 	}

	epeeBois.click(function(){
		if(niveauEpee <10){
			if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
				&& epeeBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/epeeboisactive.png");
				nombreDeBois = nombreDeBois - epeeBoisPrix[0];
				nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
				nombreDeFer = nombreDeFer - epeeBoisPrix[2];
				setPrixEpeeBois();
				hero.dommage = hero.dommage + 1;
				console.log(hero.dommage);
				localStorage.setItem("dommage",hero.dommage);
				console.log(localStorage.length);
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});