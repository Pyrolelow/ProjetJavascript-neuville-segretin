$('document').ready(function(){
    
    var hero = new Personnage();
    var monstre = new Monstre();
    var dmgPrisMonstre;
    var dmgPrisHero;

    var combat = function(){
        dmgPrisMonstre = monstre.hp - hero.dommage;
        console.log(dmgPrisMonstre);
        monstre.hp()
    }

   window.setInterval( function() {
    combat();
  },1000);


})