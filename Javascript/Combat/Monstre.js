class Monstre{
    constructor(){
        this.dmg = 1;
        this.hp = 100;
        this.experience = 50;
    }

    get dmg(){
        return this.dmg;
    }

    get hp(){
        return this.hp;
    }

    get experience(){
        return this.experience;
    }

    set dmg(dmg){
        this.dmg = dmg;
    }

    set hp(hp){
        this.hp = hp;
    }
}