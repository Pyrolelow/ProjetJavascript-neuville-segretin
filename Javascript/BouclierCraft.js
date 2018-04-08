
	var bouclierPrix = [];
	var niveauBouclier = 1;

$('document').ready(function() {

	 var bouclierBois = $("#bouclier");
	 bouclierPrix = [10,5,0];
	 niveauBouclier = 1;
	 var armeEquipement = $(".bouclier");

	 var prixBoisBouclier = $("#prixBoisBouclier");
	 var prixCuirBouclier = $("#prixCuirBouclier");
	 var prixFerBouclier = $("#prixFerBouclier");
	 var bouclierText = $('#bouclierText');
	 var niveauBouclierAffiche = $('#niveauBouclier');

  	function afficherNiveauBouclierBois(){
  		niveauBouclierAffiche.text(niveauBouclier);
  	}

  	function afficherPrixBoisBouclierBois () {
    	prixBoisBouclier.text(bouclierPrix[0]);
 	}

 	function afficherPrixCuirBouclierBois () {
    	prixCuirBouclier.text(bouclierPrix[1]);
 	}

 	function afficherPrixFerBouclierBois () {
    	prixFerBouclier.text(bouclierPrix[2]);
 	}

 	function setPrixBouclierBois() {
		

		if(niveauBouclier < 10){
			bouclierPrix[0] += 100*niveauBouclier;
			bouclierPrix[1] += 50*niveauBouclier;
			bouclierPrix[2] += 20*niveauBouclier;
			console.log("b : "+bouclierPrix[0]+" c : "+bouclierPrix[1]+" f : "+bouclierPrix[2])
		}else if(niveauBouclier < 20 && niveauBouclier >= 10){
			bouclierPrix[0] = 300*(niveauBouclier-9);
			bouclierPrix[1] = 1000*(niveauBouclier-9);
			bouclierPrix[2] = 200*(niveauBouclier-9);
			$('#nomBouclier').replaceWith('<h3 id="nomBouclier">Bouclier en cuir niveau <span id="niveauBouclier">1</span> :</h3>')
			bouclierText.replaceWith('<p id="bouclierText"><img class="itemImage" src="images/bouclier_en_cuir.png"/>Il vous faut : <span id="prixBoisBouclier">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirBouclier">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerBouclier">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisBouclier = $("#prixBoisBouclier");
			prixCuirBouclier = $("#prixCuirBouclier");
			prixFerBouclier = $("#prixFerBouclier");
			bouclierText = $('#bouclierText');
			niveauBouclierAffiche = $('#niveauBouclier');
		}else if(niveauBouclier < 30 && niveauBouclier >= 20){
			bouclierPrix[0] = 1000*(niveauBouclier-19);
			bouclierPrix[1] = 3000*(niveauBouclier-19);
			bouclierPrix[2] = 5000*(niveauBouclier-19);
			$('#nomBouclier').replaceWith('<h3 id="nomBouclier">Bouclier en fer niveau <span id="niveauBouclier">1</span> :</h3>')
			bouclierText.replaceWith('<p id="bouclierText"><img class="itemImage" src="images/bouclier_en_fer1.png"/>Il vous faut : <span id="prixBoisBouclier">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirBouclier">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerBouclier">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisBouclier = $("#prixBoisBouclier");
			prixCuirBouclier = $("#prixCuirBouclier");
			prixFerBouclier = $("#prixFerBouclier");
			bouclierText = $('#bouclierText');
			niveauBouclierAffiche = $('#niveauBouclier');
		}else if(niveauBouclier >= 30){
			$('#nomBouclier').replaceWith('<h3 id="nomBouclier">Bouclier en fer niveau <span id="niveauBouclier">30</span> :</h3>')
			bouclierText.replaceWith('<p id="bouclierText"><img class="itemImage" src="images/bouclier_en_fer1.png"/> Niveau max atteint ! </p>');
			armeEquipement.attr('src', "images/bouclierfer1active.png");
			niveauBouclier = 30;
		
		}

		if(niveauBouclier <= 10 && niveauBouclier > 1){			
			armeEquipement.attr('src', "images/bouclierboisactive.png");
		}if(niveauBouclier < 20 && niveauBouclier > 10){
			armeEquipement.attr('src', "images/boucliercuiractive.png");						
		}else if(niveauBouclier < 30 && niveauBouclier > 20){			
			armeEquipement.attr('src', "images/bouclierfer1active.png");	
		}

		afficherPrixBoisBouclierBois();
	    afficherPrixCuirBouclierBois();
	    afficherPrixFerBouclierBois();

	    afficherNiveauBouclierBois();
}

	bouclierBois.click(function(){
		if(niveauBouclier <=10){
			if (bouclierPrix[0] <= nombreDeBois && bouclierPrix[1] <= nombreDeCuir 
				&& bouclierPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/bouclierboisactive.png");
				nombreDeBois = nombreDeBois - bouclierPrix[0];
				nombreDeCuir = nombreDeCuir - bouclierPrix[1];
				nombreDeFer = nombreDeFer - bouclierPrix[2];
				niveauBouclier++;
				setPrixBouclierBois();
				hero.armure = hero.armure+1;
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
			}else if (niveauBouclier < 20 && niveauBouclier >= 10){
				if (bouclierPrix[0] <= nombreDeBois && bouclierPrix[1] <= nombreDeCuir 
					&& bouclierPrix[2] <= nombreDeFer){					
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - bouclierPrix[0];
					nombreDeCuir = nombreDeCuir - bouclierPrix[1];
					nombreDeFer = nombreDeFer - bouclierPrix[2];
					niveauBouclier++;
					setPrixBouclierBois();
					hero.armure = hero.armure+2;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else if(niveauBouclier < 30 && niveauBouclier >= 20){
				if (bouclierPrix[0] <= nombreDeBois && bouclierPrix[1] <= nombreDeCuir 
					&& bouclierPrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - bouclierPrix[0];
					nombreDeCuir = nombreDeCuir - bouclierPrix[1];
					nombreDeFer = nombreDeFer - bouclierPrix[2];
					niveauBouclier++;
					setPrixBouclierBois();
					hero.armure = hero.armure+3;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else{
				alert("Vous avez atteint le niveau max pour cet item !");
			}
		
	});

	if(localStorage.getItem('niveauBouclier')){
		niveauBouclier = parseInt(localStorage.getItem('niveauBouclier'));
		setPrixBouclierBois();
	}

});