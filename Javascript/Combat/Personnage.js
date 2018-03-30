//niveau max : 50
//2 monstres par niveau qui se succèdes
//1 monstre donne 50exp quelque soit le niveau
//on level up après avoir tué les deux monstres
//Pour combattre besoin d'un équipement de niveau supérieur
//chaque type d'équipement s'améliore 10 fois niveau (équipement cuir disponible niveau 20, fer1 niveau 30, etc..)
//Equipement supérieur se débloque après avoir fini l'équipement inférieur


class Personnage{  
    constructor(){
        this.level = 1;
        this.hp = 100;
        this.dommage = 5;
        this.armure = 0;
        this.experienceActuel = 0;
        this.experiencePourUp = 100;
    }

    get level(){
        return this.level;
    }

    get hp(){
        return this.hp;
    }

    get dommage(){
        return this.dommage;
    }

    get experienceActuel(){
        return this.experienceActuel;
    }

    get experiencePourUp(){
        return this.experiencePourUp;
    }

    set level(lvl) {
        if (lvl){
            this.level = lvl;
        }
        return;
        
    } 

    set hp(dmg){
        dmgTaken = dmg - this.armure; 
        if (dmgTaken > 0)
        this.hp = this.hp - dmgTaken;
    }

    set dommage(dmg){
        this.dommage = dmg;
    }

    set experienceActuel(exp){
        this.experienceActuel = exp;
    }

}