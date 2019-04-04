class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Ninja name is ${this.name} with Health is ${this.health}, Strength is ${this.strength} and Speed is ${this.speed}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`The Sake very well is help increase 10 point in health: ${this.health}`);
        return this.health;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const speakw = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
// const newNinja = new Ninja('Tom');
// newNinja.sayName();
// newNinja.showStats();
// newNinja.drinkSake();

const newpro = new Sensei("Tom");
newpro.speakWisdom();
newpro.showStats();