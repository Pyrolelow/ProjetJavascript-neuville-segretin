var combat;
var hero;

$('document').ready(function(){
    
    hero = new Personnage();
    var monstre = new Monstre();
    var vieRestanteMonstre;
    var vieRestanteHero;

    combat = function(){
    console.log(hero.dommage);
    if(hero.hp > 0){
        vieRestanteMonstre = monstre.hp - hero.dommage;
        console.log("Vie du monstre :" + vieRestanteMonstre);
        monstre.hp = vieRestanteMonstre;
    }else if(hero.hp <= 0){
        hero.hp = 100 * hero.level;
        monstre.hp = 100 * hero.level; 
    }

    if(hero.experiencePourUp <= hero.experienceActuel){
        hero.experienceActuel = 0;
        hero.level = hero.level+1;
        hero.hp = 100*hero.level;
        console.log("Level up ! Niveaux " + hero.level);
    }

    if(monstre.hp > 0){
        if((monstre.dmg - hero.armure) > 0){
            vieRestanteHero = hero.hp - (monstre.dmg - hero.armure);
            console.log("Votre vie :" + vieRestanteHero);
            hero.hp = vieRestanteHero;
        }else{
            console.log("Dommages bloqués !");
        }
    }else if(monstre.hp <= 0){
        hero.experienceActuel += monstre.experience;
        monstre.hp = 100*hero.level;
        hero.hp = 100*hero.level;
        monstre.dmg = monstre.dmg+3;
        console.log(monstre.dmg);        
    }

    }

    


})