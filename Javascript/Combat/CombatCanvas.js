$('document').ready(function() {

$('body').ready(function(){
    let ctx = document.getElementById('fight').getContext('2d');
    let combatBackground = document.getElementById('background');
    let ennemi = document.getElementById('ennemi');
    let personnage = document.getElementById('personnage');
    let cadreperso = document.getElementById('cadre');
    let cadremonstre = document.getElementById('cadreMonstre');
    let cent = 350;

    combatBackground.onload = function(){

        window.setInterval( function() {

        ctx.clearRect(0, 0, 1280, 720);

        ctx.drawImage(combatBackground,0,0,1280,720);
        ctx.drawImage(ennemi,840,240,120,218);
        ctx.drawImage(personnage,180,380,209,250);

        ctx.drawImage(cadreperso,60,60,413,40);
        ctx.fillStyle = 'rgb(199, 5, 0)';
        ctx.fillRect(70, 70, 350, 20);

        ctx.drawImage(cadremonstre,840,60,370,40);
        ctx.fillStyle = 'rgb(199, 5, 0)';
        ctx.fillRect(850, 70, 350, 20);
         
        combat();
        
        //vie Personnage
        if(hero.hp>0){
            //350 = 100*hero.level;
            //      = hero.hp
            var pourcent = (hero.hp*350) / (100*hero.level)

            ctx.fillStyle = 'rgb(0, 128, 0)';
            ctx.fillRect(70, 70, pourcent, 20);
        }else{
            ctx.fillStyle = 'rgb(0, 128, 0)';
            ctx.fillRect(70, 70, 0, 20);
        }

        //Niveau Personnage
        if(hero.level<=9){
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.font = '25px Althea-Bold';
            ctx.fillText(hero.level, 442, 88);
        }else{
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.font = '25px Althea-Bold';
            ctx.fillText(hero.level, 437, 88);
        }
        
        //Vie Monstre
        if(monstre.hp>0){
            //350 = 100*hero.level;
            //      = hero.hp
            var pourcent = (monstre.hp*350) / (100*hero.level)

            ctx.fillStyle = 'rgb(0, 128, 0)';
            ctx.fillRect(1200-pourcent, 70, pourcent, 20);
        }else{
            ctx.fillStyle = 'rgb(0, 1028, 0)';
            ctx.fillRect(850, 70, 0, 20);
        }

        
            
           
        },20);
    }
      
});

});