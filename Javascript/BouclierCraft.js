$('document').ready(function() {

	var bouclierBois = $("#bouclierBois");
	var bouclierBoisPrix = [10,5,0];
	var niveauBouclierBois = 1;
	var armeEquipement = $(".bouclier");

	var prixBoisBouclierBois = $("#prixBoisBouclierBois");
	var prixCuirBouclierBois = $("#prixCuirBouclierBois");
	var prixFerBouclierBois = $("#prixFerBouclierBois");
	var bouclierBoisText = $('#bouclierBoisText');
	var niveauBouclier = $('#niveauBouclierBois');

  	function afficherNiveauBouclierBois(){
  		niveauBouclier.text(niveauBouclierBois);
  	}

  	function afficherPrixBoisBouclierBois () {
    	prixBoisBouclierBois.text(bouclierBoisPrix[0]);
 	}

 	function afficherPrixCuirBouclierBois () {
    	prixCuirBouclierBois.text(bouclierBoisPrix[1]);
 	}

 	function afficherPrixFerBouclierBois () {
    	prixFerBouclierBois.text(bouclierBoisPrix[2]);
 	}

 	function setPrixBouclierBois() {
		bouclierBoisPrix[0] += 100;
		bouclierBoisPrix[1] += 50;
		bouclierBoisPrix[2] += 20;

		afficherPrixBoisBouclierBois();
	    afficherPrixCuirBouclierBois();
	    afficherPrixFerBouclierBois();

		niveauBouclierBois++;

	    if(niveauBouclierBois===11){
	    	bouclierBoisText.replaceWith('<p><img id="bouclierBois" class="itemImage" src="images/bouclier_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauBouclierBois=10;
	    }

	    afficherNiveauBouclierBois();
 	}

	bouclierBois.click(function(){
		if(niveauBouclierBois <=10){
			if (bouclierBoisPrix[0] <= nombreDeBois && bouclierBoisPrix[1] <= nombreDeCuir 
				&& bouclierBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/bouclierboisactive.png");
				nombreDeBois = nombreDeBois - bouclierBoisPrix[0];
				nombreDeCuir = nombreDeCuir - bouclierBoisPrix[1];
				nombreDeFer = nombreDeFer - bouclierBoisPrix[2];
				setPrixBouclierBois();
				hero.armure = hero.armure+1;
				console.log(hero.armure);
				localStorage.setItem("armure",hero.armure);
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});