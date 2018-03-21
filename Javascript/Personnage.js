//576 level 10;
//53 mobs pour passer lvl 10

class Personnage{   
    constructor(){
        this.level = 1;
        this.hp = 100;
        this.dommage = 2;
        this.armure = 0;
        this.experienceActuel = 0;
        this.experiencePourUp = 30;
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

    level() {
        this.level++;
    } 

    set hp(hp){
        this.hp = hp;
    }

    set dommage(dmg){
        this.dommage = dmg;
    }

    set experienceActuel(exp){
        this.experienceActuel = exp;
    }

    experiencePourUp(){
        this.experiencePourUp *= 2;
    }
}