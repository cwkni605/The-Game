class healSpell{
    constructor(){
        this.name = "Heal Spell",
        this.cost = 20,
        this.manaCost = 5,
        this.use = function heal()
        {
            health += 10;
            magic -= this.manaCost;
        }
    }
}

class SummonFlameElemntal{
    constructor(){
        this.name = "Summon Fire Elemental",
        this.cost = 100,
        this.manaCost = 20,
        this.use = function summon()
        {
            magic -= this.manaCost;
        }
    }
}