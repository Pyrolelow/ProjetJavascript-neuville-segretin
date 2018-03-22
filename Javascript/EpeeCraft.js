$(document).ready(function(){

	var epeeBois = $("#epeeEnBois");
	var epeeBoisPrix = [50,20,0];
	var armeEquipement = $(".epee");

	epeeBois.click(function(){
		console.log(nombreDeBois,nombreDeCuir,nombreDeFer);
		if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
			&& epeeBoisPrix[2] <= nombreDeFer){
			armeEquipement.attr('src', "images/epeeboisactive.png");
			nombreDeBois = nombreDeBois - epeeBoisPrix[0];
			nombreDeCuir = nombreDeCuir - epeeBoisPrix[1];
			nombreDeBois = nombreDeBois - epeeBoisPrix[2];
		}else{
			alert("Il vous faut plus de ressources pour fabriquer votre épée en bois.");
		}
	})
});