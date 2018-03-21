$(document).ready(function(){

var epeeBois = $("#epeeEnBois");
var epeeBoisPrix = [200,100,0];
var armeEquipement = $("#armeActuelle")

epeeBois.click(function(){
    console.log(nombreDeBois,nombreDeCuir,nombreDeFer);
if (epeeBoisPrix[0] <= nombreDeBois && epeeBoisPrix[1] <= nombreDeCuir 
&& epeeBoisPrix[2] <= nombreDeFer){
    armeEquipement.html('<img id="epeeEnBois" src="images/epee_en_bois.png"/>');
}else{
    alert("Il vous faut plus de ressources pour fabriquer votre épée en bois.");
}
})

});