class slime{
    constructor(){
        this.name = "slime";
        this.melee = 1;
        this.maxHealth = 5;
        this.health = 5;
        this.armor = 0;
        this.spawnCost = 1;
        this.abilities = [EnemyMelee(this.melee)];
    }
}

class bigSlime{
    constructor(){
        this.name = "Big slime";
        this.melee = 2;
        this.maxHealth = 7;
        this.health = 7;
        this.armor = 0;
        this.spawnCost = 2;
        this.abilities = [EnemyMelee(this.melee)]
    }
}

function EnemyMelee(damage){
    
}