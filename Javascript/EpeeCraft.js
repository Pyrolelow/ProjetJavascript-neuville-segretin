var niveauEpee = 1;
var epeeBoisPrix = [];
var armeEquipement;

var prixBoisEpeeBois;
var prixCuirEpeeBois;
var prixFerEpeeBois;
var epeeBoisText ;
var niveauEpeeAffiche;


$('document').ready(function() {

	

	var epee = $("#epee");
	var epeeBoisPrix = [5,2,0];
	var armeEquipement = $(".epee");

	var prixBoisEpeeBois = $("#prixBoisEpee");
	var prixCuirEpeeBois = $("#prixCuirEpee");
	var prixFerEpeeBois = $("#prixFerEpee");
	var epeeBoisText = $('#epeeText');
	var niveauEpeeAffiche = $('#niveauEpee');

  	function afficherNiveauEpeeBois(){
  		niveauEpeeAffiche.text(niveauEpee);
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

 	function setPrixEpeeBois(){
		
		console.log(niveauEpee);
		if(niveauEpee < 10){
			epeeBoisPrix[0] = 50*niveauEpee;
			epeeBoisPrix[1] = 25*niveauEpee;
			epeeBoisPrix[2] = 5*niveauEpee;
			armeEquipement.attr('src', "images/epeeboisactive.png");
		}else if(niveauEpee < 20 && niveauEpee >= 10){
			epeeBoisPrix[0] = 200*(niveauEpee-9);
			epeeBoisPrix[1] = 500*(niveauEpee-9);
			epeeBoisPrix[2] = 100*(niveauEpee-9);
			$('#nomEpee').replaceWith('<h3 id="nomEpee">Épée en cuir niveau <span id="niveauEpee">1</span> :</h3>')
			epeeBoisText.replaceWith('<p id="epeeText"><img class="itemImage" src="images/epee_en_cuir.png"/>Il vous faut : <span id="prixBoisEpee">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirEpee">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerEpee">100</span><img id="lingotFer" src="images/fer.png"/></p>');
			armeEquipement.attr('src', "images/epeecuiractive.png");
			prixBoisEpeeBois = $("#prixBoisEpee");
			prixCuirEpeeBois = $("#prixCuirEpee");
			prixFerEpeeBois = $("#prixFerEpee");
			epeeBoisText = $('#epeeText');
			niveauEpeeAffiche = $('#niveauEpee');
		}else if(niveauEpee < 30 && niveauEpee >= 20){
			epeeBoisPrix[0] = 2000*(niveauEpee-19);
			epeeBoisPrix[1] = 2500*(niveauEpee-19);
			epeeBoisPrix[2] = 4000*(niveauEpee-19);
			$('#nomEpee').replaceWith('<h3 id="nomEpee">Épée en fer niveau <span id="niveauEpee">1</span> :</h3>')
			epeeBoisText.replaceWith('<p id="epeeText"><img class="itemImage" src="images/epee_en_fer1.png"/>Il vous faut : <span id="prixBoisEpee">200</span><img id="bois" src="images/bois.png"/><span id="prixCuirEpee">500</span><img id="cuir" src="images/cuir.png"/><span id="prixFerEpee">100</span><img id="lingotFer" src="images/fer.png"/></p>');
			armeEquipement.attr('src', "images/epeefer1active.png");
			prixBoisEpeeBois = $("#prixBoisEpee");
			prixCuirEpeeBois = $("#prixCuirEpee");
			prixFerEpeeBois = $("#prixFerEpee");
			epeeBoisText = $('#epeeText');
			niveauEpeeAffiche = $('#niveauEpee');
		}else if(niveauEpee >= 30){
			$('#nomEpee').replaceWith('<h3 id="nomEpee">Épée en fer niveau <span id="niveauEpee">30</span> :</h3>')
			epeeBoisText.replaceWith('<p id="epeeText"><img class="itemImage" src="images/epee_en_fer1.png"/> Niveau max atteint ! </p>');
			armeEquipement.attr('src', "images/epeefer1active.png");
			niveauEpee = 30;
		}
		
		afficherPrixBoisEpeeBois();
	    afficherPrixCuirEpeeBois();
	    afficherPrixFerEpeeBois();

		

	    afficherNiveauEpeeBois();
 	}

	epee.click(function(){
		if(niveauEpee < 10){
			if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
				&& epeeBoisPrix[2] <= nombreDeFer){
				let audio = new Audio("Sons/sonEnclume.mp3");
		    	audio.play();
				nombreDeBois = nombreDeBois - epeeBoisPrix[0];
				nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
				nombreDeFer = nombreDeFer - epeeBoisPrix[2];
				niveauEpee++;
				setPrixEpeeBois();
				hero.dommage = hero.dommage + 1;
				localStorage.setItem("dommage",hero.dommage);
				}
			}else if (niveauEpee < 20 && niveauEpee >= 10){
				if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
					&& epeeBoisPrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - epeeBoisPrix[0];
					nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
					nombreDeFer = nombreDeFer - epeeBoisPrix[2];
					niveauEpee++;
					setPrixEpeeBois();
					hero.dommage = hero.dommage + 3;
					}
			}else if(niveauEpee < 30 && niveauEpee >= 20){
				if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
					&& epeeBoisPrix[2] <= nombreDeFer){
					let audio = new Audio("Sons/sonEnclume.mp3");
					audio.play();
					nombreDeBois = nombreDeBois - epeeBoisPrix[0];
					nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
					nombreDeFer = nombreDeFer - epeeBoisPrix[2];
					niveauEpee++;
					setPrixEpeeBois();
					hero.dommage = hero.dommage + 5;
					}
			}else{
				alert("Il vous faut plus de ressources pour fabriquer cet item !");
			}
	});

	if(localStorage.getItem('niveauEpee')){
		niveauEpee = parseInt(localStorage.getItem('niveauEpee'));
		setPrixEpeeBois();
	}
});