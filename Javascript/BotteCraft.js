$('document').ready(function() {

	var botteBois = $("#botteBois");
	var botteBoisPrix = [30,20,0];
	var niveauBotteBois = 1;
	var armeEquipement = $(".botte");

	var prixBoisBotteBois = $("#prixBoisBotteBois");
	var prixCuirBotteBois = $("#prixCuirBotteBois");
	var prixFerBotteBois = $("#prixFerBotteBois");
	var botteBoisText = $('#botteBoisText');
	var niveauBotte = $('#niveauBotteBois');

  	function afficherNiveauBotteBois(){
  		niveauBotte.text(niveauBotteBois);
  	}

  	function afficherPrixBoisBotteBois () {
    	prixBoisBotteBois.text(botteBoisPrix[0]);
 	}

 	function afficherPrixCuirBotteBois () {
    	prixCuirBotteBois.text(botteBoisPrix[1]);
 	}

 	function afficherPrixFerBotteBois () {
    	prixFerBotteBois.text(botteBoisPrix[2]);
 	}

 	function setPrixBotteBois() {
		botteBoisPrix[0] += 30;
		botteBoisPrix[1] += 10;
		botteBoisPrix[2] += 5;

		afficherPrixBoisBotteBois();
	    afficherPrixCuirBotteBois();
	    afficherPrixFerBotteBois();

		niveauBotteBois++;

	    if(niveauBotteBois===11){
	    	botteBoisText.replaceWith('<p><img id="botteBois" class="itemImage" src="images/botte_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauBotteBois=10;
	    }

	    afficherNiveauBotteBois();
 	}

	botteBois.click(function(){
		if(niveauBotteBois <=10){
			if (botteBoisPrix[0] <= nombreDeBois && botteBoisPrix[1] <= nombreDeCuir 
				&& botteBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/botteboisactive.png");
				nombreDeBois = nombreDeBois - botteBoisPrix[0];
				nombreDeCuir = nombreDeCuir - botteBoisPrix[1];
				nombreDeFer = nombreDeFer - botteBoisPrix[2];
				setPrixBotteBois();
				hero.armure = hero.armure+1;
				console.log(hero.armure);
				localStorage.setItem("armure",hero.armure);
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});