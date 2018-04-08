var combat;
var hero;
var monstre;

$('document').ready(function(){
    
    hero = new Personnage();
    monstre = new Monstre();
    var vieRestanteMonstre;
    var vieRestanteHero;
    
    if(localStorage.getItem('niveauPersonnage')){
        hero.level = parseInt(localStorage.getItem('niveauPersonnage'));
        monstre.hp = 100*hero.level;
        hero.hp = 100*hero.level;
        monstre.dmg = 3*hero.level*2;
        if(localStorage.getItem("expAc"))
        hero.experienceActuel = parseInt(localStorage.getItem("expAc"));
    }

    combat = function(){

        if(hero.hp > 0 && monstre.hp > 0){
            vieRestanteMonstre = monstre.hp - hero.dommage;
            console.log("Vie du monstre :" + vieRestanteMonstre);
            monstre.hp = vieRestanteMonstre;
            if(hero.experiencePourUp <= hero.experienceActuel){
                hero.experienceActuel = 0;
                hero.level = hero.level+1;
                hero.hp = 100*hero.level;
                console.log("Level up ! Niveaux " + hero.level);
            }
            if((monstre.dmg - hero.armure) > 0){
                vieRestanteHero = hero.hp - (monstre.dmg - hero.armure);
                console.log("Votre vie :" + vieRestanteHero);
                hero.hp = vieRestanteHero;
            }else{
                console.log("Dommages bloqués !");
            }
        }else if(hero.hp <= 0){
            hero.hp = 100 * hero.level;
            monstre.hp = 100 * hero.level; 
        }else if(monstre.hp <= 0){
            hero.experienceActuel += monstre.experience;
            monstre.hp = 100*hero.level;
            hero.hp = 100*hero.level;
            monstre.dmg = monstre.dmg+3;
            console.log(monstre.dmg);        
        }

    }

});