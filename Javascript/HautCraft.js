$('document').ready(function() {

	var hautBois = $("#hautBois");
	var hautBoisPrix = [250,100,0];
	var niveauHautBois = 1;
	var armeEquipement = $(".haut");

	var prixBoisHautBois = $("#prixBoisHautBois");
	var prixCuirHautBois = $("#prixCuirHautBois");
	var prixFerHautBois = $("#prixFerHautBois");
	var hautBoisText = $('#hautBoisText');
	var niveauHaut = $('#niveauHautBois');

  	function afficherNiveauHautBois(){
  		niveauHaut.text(niveauHautBois);
  	}

  	function afficherPrixBoisHautBois () {
    	prixBoisHautBois.text(hautBoisPrix[0]);
 	}

 	function afficherPrixCuirHautBois () {
    	prixCuirHautBois.text(hautBoisPrix[1]);
 	}

 	function afficherPrixFerHautBois () {
    	prixFerHautBois.text(hautBoisPrix[2]);
 	}

 	function setPrixHautBois() {
		hautBoisPrix[0] += 150;
		hautBoisPrix[1] += 50;
		hautBoisPrix[2] += 15;

		afficherPrixBoisHautBois();
	    afficherPrixCuirHautBois();
	    afficherPrixFerHautBois();

		niveauHautBois++;

	    if(niveauHautBois===11){
	    	hautBoisText.replaceWith('<p><img id="hautBois" class="itemImage" src="images/haut_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauHautBois=10;
	    }

	    afficherNiveauHautBois();
 	}

	hautBois.click(function(){
		if(niveauHautBois <=10){
			if (hautBoisPrix[0] <= nombreDeBois && hautBoisPrix[1] <= nombreDeCuir 
				&& hautBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/hautboisactive.png");
				nombreDeBois = nombreDeBois - hautBoisPrix[0];
				nombreDeCuir = nombreDeCuir - hautBoisPrix[1];
				nombreDeFer = nombreDeFer - hautBoisPrix[2];
				setPrixHautBois();
				hero.armure = hero.armure+1;
				console.log(hero.armure);
				localStorage.setItem("armure",hero.armure);
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});