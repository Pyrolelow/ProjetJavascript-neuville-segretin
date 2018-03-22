$(document).ready(function(){

	var epeeBois = $("#epeeBois");
	var epeeBoisPrix = [1,1,0];
	var armeEquipement = $(".epee");

	epeeBois.click(function(){
		if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
			&& epeeBoisPrix[2] <= nombreDeFer){
			let audio = new Audio("Sons/sonEnclume.mp3");
    		audio.play();
			armeEquipement.attr('src', "images/epeeboisactive.png");
			nombreDeBois = nombreDeBois - epeeBoisPrix[0];
			nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
			nombreDeBois = nombreDeBois - epeeBoisPrix[2];
		}else{
			alert("Il vous faut plus de ressources pour fabriquer votre épée en bois.");
		}
	});

});