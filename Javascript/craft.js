$(document).ready(function(){

	var epeeBois = $("#epeeEnBois");
	var epeeBoisPrix = [1,1,0];
	var armeEquipement = $(".epee");

	epeeBois.click(function(){
		console.log(nombreDeBois,nombreDeCuir,nombreDeFer);
		if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
			&& epeeBoisPrix[2] <= nombreDeFer){
			armeEquipement.attr('src', "images/epeeboisactive.png");
		}else{
			alert("Il vous faut plus de ressources pour fabriquer votre épée en bois.");
		}
	})
});