var casquePrix = [];
var niveauCasque;

$('document').ready(function() {

	var casque = $("#casque");
	casquePrix = [80,30,0];
	niveauCasque = 1;
	var armeEquipement = $(".casque");

	var prixBoisCasque = $("#prixBoisCasque");
	var prixCuirCasque = $("#prixCuirCasque");
	var prixFerCasque = $("#prixFerCasque");
	var casqueText = $('#casqueText');
	var niveauCasqueAffiche = $('#niveauCasque');

  	function afficherNiveauCasque(){
  		niveauCasqueAffiche.text(niveauCasque);
  	}

  	function afficherPrixBoisCasque () {
    	prixBoisCasque.text(casquePrix[0]);
 	}

 	function afficherPrixCuirCasque () {
    	prixCuirCasque.text(casquePrix[1]);
 	}

 	function afficherPrixFerCasque () {
    	prixFerCasque.text(casquePrix[2]);
 	}

 	function setPrixCasque() {

		if(niveauCasque < 10){
			casquePrix[0] += 30*niveauCasque;
			casquePrix[1] += 20*niveauCasque;
			casquePrix[2] += 15*niveauCasque;
			console.log("b : "+casquePrix[0]+" c : "+casquePrix[1]+" f : "+casquePrix[2])
		}else if(niveauCasque < 20 && niveauCasque >= 10){
			casquePrix[0] = 300*(niveauCasque-9);
			casquePrix[1] = 1000*(niveauCasque-9);
			casquePrix[2] = 200*(niveauCasque-9);
			$('#nomCasque').replaceWith('<h3 id="nomCasque">Casque en cuir niveau <span id="niveauCasque">1</span> :</h3>')
			casqueText.replaceWith('<p id="casqueText"><img class="itemImage" src="images/casque_en_cuir.png"/>Il vous faut : <span id="prixBoisCasque">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirCasque">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerCasque">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisCasque = $("#prixBoisCasque");
			prixCuirCasque = $("#prixCuirCasque");
			prixFerCasque = $("#prixFerCasque");
			casqueText = $('#casqueText');
			niveauCasqueAffiche = $('#niveauCasque');
		}else if(niveauCasque < 30 && niveauCasque >= 20){
			casquePrix[0] = 1000*(niveauCasque-19);
			casquePrix[1] = 3000*(niveauCasque-19);
			casquePrix[2] = 5000*(niveauCasque-19);
			$('#nomCasque').replaceWith('<h3 id="nomCasque">Casque en fer niveau <span id="niveauCasque">1</span> :</h3>')
			casqueText.replaceWith('<p id="casqueText"><img class="itemImage" src="images/casque_en_fer1.png"/>Il vous faut : <span id="prixBoisCasque">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirCasque">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerCasque">100</span><img id="lingotFer" src="images/fer.png"/></p>');			
			prixBoisCasque = $("#prixBoisCasque");
			prixCuirCasque = $("#prixCuirCasque");
			prixFerCasque = $("#prixFerCasque");
			casqueText = $('#casqueText');
			niveauCasqueAffiche = $('#niveauCasque');
		}else if(niveauCasque >= 30){
			$('#nomCasque').replaceWith('<h3 id="nomCasque">Casque en fer niveau <span id="niveauCasque">30</span> :</h3>')
			casqueText.replaceWith('<p id="casqueText"><img class="itemImage" src="images/casque_en_fer1.png"/> Niveau max atteint ! </p>');
			armeEquipement.attr('src', "images/casquefer1active.png");
			niveauCasque = 30;
		
		}

		if(niveauCasque < 10 && niveauCasque > 1){			
			armeEquipement.attr('src', "images/casqueboisactive.png");
		}if(niveauCasque < 20 && niveauCasque > 10){
			armeEquipement.attr('src', "images/casquecuiractive.png");						
		}else if(niveauCasque < 30 && niveauCasque > 20){			
			armeEquipement.attr('src', "images/casquefer1active.png");	
		}

		afficherPrixBoisCasque();
	    afficherPrixCuirCasque();
	    afficherPrixFerCasque();


	    afficherNiveauCasque();
 	}

	casque.click(function(){
		if(niveauCasque <=10){
			if (casquePrix[0] <= nombreDeBois && casquePrix[1] <= nombreDeCuir 
				&& casquePrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				armeEquipement.attr('src', "images/casqueboisactive.png");
				nombreDeBois = nombreDeBois - casquePrix[0];
				nombreDeCuir = nombreDeCuir - casquePrix[1];
				nombreDeFer = nombreDeFer - casquePrix[2];
				niveauCasque++;
				setPrixCasque();
				hero.armure = hero.armure+1;
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
			}else if (niveauCasque < 20 && niveauCasque >= 10){
				if (casquePrix[0] <= nombreDeBois && casquePrix[1] <= nombreDeCuir 
					&& casquePrix[2] <= nombreDeFer){					
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - casquePrix[0];
					nombreDeCuir = nombreDeCuir - casquePrix[1];
					nombreDeFer = nombreDeFer - casquePrix[2];
					niveauCasque++;
					setPrixCasque();
					hero.armure = hero.armure+2;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else if(niveauCasque < 30 && niveauCasque >= 20){
				if (casquePrix[0] <= nombreDeBois && casquePrix[1] <= nombreDeCuir 
					&& casquePrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - casquePrix[0];
					nombreDeCuir = nombreDeCuir - casquePrix[1];
					nombreDeFer = nombreDeFer - casquePrix[2];
					niveauCasque++;
					setPrixCasque();
					hero.armure = hero.armure+3;
					}else{
						alert("Il vous faut plus de ressources pour fabriquer cet item !");
					}
			}else{
				alert("Vous avez atteint le niveau max pour cet item !");
			}
		
	});

	if(localStorage.getItem('niveauCasque')){
		niveauCasque = parseInt(localStorage.getItem('niveauCasque'));
		setPrixCasque();
	}
			
			
			


});