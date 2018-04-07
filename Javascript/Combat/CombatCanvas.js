$('document').ready(function() {

$('body').ready(function(){
    let ctx = document.getElementById('fight').getContext('2d');
    let combatBackground = document.getElementById('background');
    let ennemi = document.getElementById('ennemi');
    let personnage = document.getElementById('personnage');
    let cent = 350;

    combatBackground.onload = function(){
        window.setInterval( function() {

        ctx.clearRect(0, 0, 1280, 720);

        ctx.drawImage(combatBackground,0,0,1280,720);
        ctx.drawImage(ennemi,935,320,220,300)

        ctx.drawImage(personnage,120,330,200,250)

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(70, 70, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(70, 70, 350, 20);

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(850, 70, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(850, 70, 350, 20);
         
        
        combat();

        if(hero.hp>0){
            //350 = 100*hero.level;
            //      = hero.hp
            var pourcent = (hero.hp*350) / (100*hero.level)

            ctx.fillStyle = 'rgb(0, 200, 0)';
            ctx.fillRect(70, 70, pourcent, 20);
        }else{
            ctx.fillStyle = 'rgb(0, 200, 0)';
            ctx.fillRect(70, 70, 0, 20);
        }

        let level = document.getElementById('niv1'); //A la place du 1 tu met hero.level faut rajouter des les niveaux dans combat html avec la class jeux

        ctx.drawImage(level,450,50,50,50)
           
        //vie Personnage
        

        //Vie Monstre
       

        if(monstre.hp>0){
            //350 = 100*hero.level;
            //      = hero.hp
            var pourcent = (monstre.hp*350) / (100*hero.level)

            ctx.fillStyle = 'rgb(0, 200, 0)';
            ctx.fillRect(1200-pourcent, 70, pourcent, 20);
        }else{
            ctx.fillStyle = 'rgb(0, 200, 0)';
            ctx.fillRect(850, 70, 0, 20);
        }

        
            
           
        },1000);
    }
    
    
});









});