var bottePrix = [];
var niveauBotte;

$('document').ready(function() {

	 var botte = $("#botte");
	 bottePrix = [30,20,0];
	 niveauBotte = 1;
	 var armeEquipement = $(".botte");

	var prixBoisBotte = $("#prixBoisBotte");
	 var prixCuirBotte = $("#prixCuirBotte");
	 var prixFerBotte = $("#prixFerBotte");
	 var botteText = $('#botteText');
	 var niveauBotteAffiche = $('#niveauBotte');

  	function afficherNiveauBotteBois(){
  		niveauBotteAffiche.text(niveauBotte);
  	}

  	function afficherPrixBoisBotteBois () {
    	prixBoisBotte.text(bottePrix[0]);
 	}

 	function afficherPrixCuirBotteBois () {
    	prixCuirBotte.text(bottePrix[1]);
 	}

 	function afficherPrixFerBotteBois () {
    	prixFerBotte.text(bottePrix[2]);
 	}

 	function setPrixBotteBois() {
		
		
		

		if(niveauBotte < 10){
			bottePrix[0] += 30*niveauBotte;
			bottePrix[1] += 20*niveauBotte;
			bottePrix[2] += 0*niveauBotte;
			console.log("b : "+bottePrix[0]+" c : "+bottePrix[1]+" f : "+bottePrix[2])
		}else if(niveauBotte < 20 && niveauBotte >= 10){
			bottePrix[0] = 300*(niveauBotte-9);
			bottePrix[1] = 1000*(niveauBotte-9);
			bottePrix[2] = 200*(niveauBotte-9);
			$('#nomBotte').replaceWith('<h3 id="nomBotte">Bottes en cuir niveau <span id="niveauBotte">1</span> :</h3>')
			botteText.replaceWith('<p id="botteText"><img class="itemImage" src="images/botte_en_cuir.png"/>Il vous faut : <span id="prixBoisBotte">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirBotte">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerBotte">100</span><img id="lingotFer" src="images/fer.png"/></p>');
			prixBoisBotte = $("#prixBoisBotte");
			prixCuirBotte = $("#prixCuirBotte");
			prixFerBotte = $("#prixFerBotte");
			botteText = $('#botteText');
			niveauBotteAffiche = $('#niveauBotte');
		}else if(niveauBotte < 30 && niveauBotte >= 20){
			bottePrix[0] = 1000*(niveauBotte-19);
			bottePrix[1] = 3000*(niveauBotte-19);
			bottePrix[2] = 5000*(niveauBotte-19);
			$('#nomBotte').replaceWith('<h3 id="nomBotte">Bottes en fer niveau <span id="niveauBotte">1</span> :</h3>')
			botteText.replaceWith('<p id="botteText"><img class="itemImage" src="images/botte_en_fer1.png"/>Il vous faut : <span id="prixBoisBotte">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirBotte">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerBotte">100</span><img id="lingotFer" src="images/fer.png"/></p>');
			prixBoisBotte = $("#prixBoisBotte");
			prixCuirBotte = $("#prixCuirBotte");
			prixFerBotte = $("#prixFerBotte");
			botteText = $('#botteText');
			niveauBotteAffiche = $('#niveauBotte');
		}else if(niveauBotte >= 30){
			$('#nomBotte').replaceWith('<h3 id="nomBotte">Bottes en fer niveau <span id="niveauBotte">30</span> :</h3>')
			botteText.replaceWith('<p id="botteText"><img class="itemImage" src="images/botte_en_fer1.png"/> Niveau max atteint ! </p>');
			armeEquipement.attr('src', "images/bottefer1active.png");
			niveauBotte = 30;
		}

		if(niveauBotte < 10 && niveauBotte > 1){			
			armeEquipement.attr('src', "images/botteboisactive.png");
		}if(niveauBotte < 20 && niveauBotte > 10){
			armeEquipement.attr('src', "images/bottecuiractive.png");						
		}else if(niveauBotte < 30 && niveauBotte > 20){			
			armeEquipement.attr('src', "images/bottefer1active.png");	
		}

		afficherPrixBoisBotteBois();
	    afficherPrixCuirBotteBois();
	    afficherPrixFerBotteBois();

	    afficherNiveauBotteBois();
 	}

	botte.click(function(){
		console.log("yo");
		if(niveauBotte <10){
			if (bottePrix[0] <= nombreDeBois && bottePrix[1] <= nombreDeCuir 
				&& bottePrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				nombreDeBois = nombreDeBois - bottePrix[0];
				nombreDeCuir = nombreDeCuir - bottePrix[1];
				nombreDeFer = nombreDeFer - bottePrix[2];
				niveauBotte++;
				console.log(niveauBotte);
				setPrixBotteBois();
				hero.armure = hero.armure+1;
				}else{
					alert("Il vous faut plus de ressources pour fabriquer cet item !");
				}
			}else if (niveauBotte < 20 && niveauBotte >= 10){
				if (bottePrix[0] <= nombreDeBois && bottePrix[1] <= nombreDeCuir 
					&& bottePrix[2] <= nombreDeFer){					
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - bottePrix[0];
					nombreDeCuir = nombreDeCuir - bottePrix[1];
					nombreDeFer = nombreDeFer - bottePrix[2];
					niveauBotte++;
					setPrixBotteBois();
					hero.armure = hero.armure+2;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else if(niveauBotte < 30 && niveauBotte >= 20){
				if (bottePrix[0] <= nombreDeBois && bottePrix[1] <= nombreDeCuir 
					&& bottePrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - bottePrix[0];
					nombreDeCuir = nombreDeCuir - bottePrix[1];
					nombreDeFer = nombreDeFer - bottePrix[2];
					niveauBotte++;
					setPrixBotteBois();
					hero.armure = hero.armure+3;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else{
				alert("Vous avez atteint le niveau max pour cet item !");
			}
	});

	if(localStorage.getItem('niveauBotte')){
		niveauBotte = parseInt(localStorage.getItem('niveauBotte'));
		setPrixBotteBois();
	}

});