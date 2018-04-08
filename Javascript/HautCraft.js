var hautPrix = [];
var niveauHaut;

$('document').ready(function() {

	var haut = $("#haut");
	hautPrix = [250,100,0];
	niveauHaut = 1;
	var armeEquipement = $(".haut");

	var prixBoisHaut = $("#prixBoisHaut");
	var prixCuirHaut = $("#prixCuirHaut");
	var prixFerHaut = $("#prixFerHaut");
	var hautText = $('#hautText');
	var niveauHautAffiche = $('#niveauHaut');

  	function afficherNiveauHaut(){
  		niveauHautAffiche.text(niveauHaut);
  	}

  	function afficherPrixBoisHaut () {
    	prixBoisHaut.text(hautPrix[0]);
 	}

 	function afficherPrixCuirHaut () {
    	prixCuirHaut.text(hautPrix[1]);
 	}

 	function afficherPrixFerHaut () {
    	prixFerHaut.text(hautPrix[2]);
 	}

 	function setPrixHaut() {
	
		if(niveauHaut < 10){
			hautPrix[0] += 150*niveauHaut;
			hautPrix[1] += 50*niveauHaut;
			hautPrix[2] += 15*niveauHaut;
			console.log("b : "+hautPrix[0]+" c : "+hautPrix[1]+" f : "+hautPrix[2])
		}else if(niveauHaut < 20 && niveauHaut >= 10){
			hautPrix[0] = 300*(niveauHaut-9);
			hautPrix[1] = 1000*(niveauHaut-9);
			hautPrix[2] = 200*(niveauHaut-9);
			$('#nomHaut').replaceWith('<h3 id="nomHaut">Haut en cuir niveau <span id="niveauHaut">1</span> :</h3>')
			hautText.replaceWith('<p id="hautText"><img class="itemImage" src="images/haut_en_cuir.png"/>Il vous faut : <span id="prixBoisHaut">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirHaut">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerHaut">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisHaut = $("#prixBoisHaut");
			prixCuirHaut = $("#prixCuirHaut");
			prixFerHaut = $("#prixFerHaut");
			hautText = $('#hautText');
			niveauHautAffiche = $('#niveauHaut');
		}else if(niveauHaut < 30 && niveauHaut >= 20){
			hautPrix[0] = 1000*(niveauHaut-19);
			hautPrix[1] = 3000*(niveauHaut-19);
			hautPrix[2] = 5000*(niveauHaut-19);
			$('#nomHaut').replaceWith('<h3 id="nomHaut">Haut en fer niveau <span id="niveauHaut">1</span> :</h3>')
			hautText.replaceWith('<p id="hautText"><img class="itemImage" src="images/haut_en_fer1.png"/>Il vous faut : <span id="prixBoisHaut">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirHaut">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerHaut">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisHaut = $("#prixBoisHaut");
			prixCuirHaut = $("#prixCuirHaut");
			prixFerHaut = $("#prixFerHaut");
			hautText = $('#hautText');
			niveauHautAffiche = $('#niveauHaut');
		}else if(niveauHaut >= 30){
			$('#nomHaut').replaceWith('<h3 id="nomHaut">Haut en fer niveau <span id="niveauHaut">30</span> :</h3>')
			hautText.replaceWith('<p id="hautText"><img class="itemImage" src="images/haut_en_fer1.png"/> Niveau max atteint ! </p>');
			armeEquipement.attr('src', "images/hautfer1active.png");
			niveauHaut = 30;
		
		}

		if(niveauHaut <= 10 && niveauHaut > 1){			
			armeEquipement.attr('src', "images/hautboisactive.png");
		}if(niveauHaut < 20 && niveauHaut > 10){
			armeEquipement.attr('src', "images/hautcuiractive.png");						
		}else if(niveauHaut < 30 && niveauHaut > 20){			
			armeEquipement.attr('src', "images/hautfer1active.png");	
		}

		afficherPrixBoisHaut();
	    afficherPrixCuirHaut();
	    afficherPrixFerHaut();

	    afficherNiveauHaut();
 	}

	haut.click(function(){
		if(niveauHaut <=10){
			if (hautPrix[0] <= nombreDeBois && hautPrix[1] <= nombreDeCuir 
				&& hautPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/hautboisactive.png");
				nombreDeBois = nombreDeBois - hautPrix[0];
				nombreDeCuir = nombreDeCuir - hautPrix[1];
				nombreDeFer = nombreDeFer - hautPrix[2];
				niveauHaut++;
				setPrixHaut();
				hero.armure = hero.armure+1;
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
			}else if (niveauHaut < 20 && niveauHaut >= 10){
				if (hautPrix[0] <= nombreDeBois && hautPrix[1] <= nombreDeCuir 
					&& hautPrix[2] <= nombreDeFer){					
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - hautPrix[0];
					nombreDeCuir = nombreDeCuir - hautPrix[1];
					nombreDeFer = nombreDeFer - hautPrix[2];
					niveauHaut++;
					setPrixHaut();
					hero.armure = hero.armure+2;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else if(niveauHaut < 30 && niveauHaut >= 20){
				if (hautPrix[0] <= nombreDeBois && hautPrix[1] <= nombreDeCuir 
					&& hautPrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - hautPrix[0];
					nombreDeCuir = nombreDeCuir - hautPrix[1];
					nombreDeFer = nombreDeFer - hautPrix[2];
					niveauHaut++;
					setPrixHaut();
					hero.armure = hero.armure+3;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else{
				alert("Vous avez atteint le niveau max pour cet item !");
			}
		
	});

	if(localStorage.getItem('niveauHaut')){
		niveauHaut = parseInt(localStorage.getItem('niveauHaut'));
		setPrixHaut();
	}
	
});