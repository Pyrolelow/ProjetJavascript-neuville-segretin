$('document').ready(function() {

	var casqueBois = $("#casqueBois");
	var casqueBoisPrix = [80,30,0];
	var niveauCasqueBois = 1;
	var armeEquipement = $(".casque");

	var prixBoisCasqueBois = $("#prixBoisCasqueBois");
	var prixCuirCasqueBois = $("#prixCuirCasqueBois");
	var prixFerCasqueBois = $("#prixFerCasqueBois");
	var casqueBoisText = $('#casqueBoisText');
	var niveauCasque = $('#niveauCasqueBois');

  	function afficherNiveauCasqueBois(){
  		niveauCasque.text(niveauCasqueBois);
  	}

  	function afficherPrixBoisCasqueBois () {
    	prixBoisCasqueBois.text(casqueBoisPrix[0]);
 	}

 	function afficherPrixCuirCasqueBois () {
    	prixCuirCasqueBois.text(casqueBoisPrix[1]);
 	}

 	function afficherPrixFerCasqueBois () {
    	prixFerCasqueBois.text(casqueBoisPrix[2]);
 	}

 	function setPrixCasqueBois() {
		casqueBoisPrix[0] += 30;
		casqueBoisPrix[1] += 20;
		casqueBoisPrix[2] += 15;

		afficherPrixBoisCasqueBois();
	    afficherPrixCuirCasqueBois();
	    afficherPrixFerCasqueBois();

		niveauCasqueBois++;

	    if(niveauCasqueBois===11){
	    	casqueBoisText.replaceWith('<p><img id="casqueBois" class="itemImage" src="images/casque_en_bois.png"/> Niveau maximal de l\'arme atteint !</p>');
	    	niveauCasqueBois=10;
	    }

	    afficherNiveauCasqueBois();
 	}

	casqueBois.click(function(){
		if(niveauCasqueBois <=10){
			if (casqueBoisPrix[0] <= nombreDeBois && casqueBoisPrix[1] <= nombreDeCuir 
				&& casqueBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/casqueboisactive.png");
				nombreDeBois = nombreDeBois - casqueBoisPrix[0];
				nombreDeCuir = nombreDeCuir - casqueBoisPrix[1];
				nombreDeFer = nombreDeFer - casqueBoisPrix[2];
				setPrixCasqueBois();
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
		}
	});

});