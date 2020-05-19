class dullSword{
    constructor(){
        this.name = "Dull Sword";
        this.type = "sword";
        this.value = 10;
        this.damage = 1;
        this.notAttachments = ["gemstone","pole","spearhead","string","axe head"];
        this.attachments = [];
    }
}

class cheapSword{
    constructor(){
        this.name = "Cheap Sword";
        this.type = "sword";
        this.value = 20;
        this.damage = 2;
        this.notAttachments = ["gemstone","pole","spearhead","string","axe head"];
        this.attachments = [];
    }
}

class SHP{
    constructor(){
        this.name = "Small Health Potion",
        this.cost = 5,
        this.type = "usable",
        this.use = function heal(){
            health += 10;
        }
    }
}

class MHP{
    constructor(){
        this.name = "Health Potion",
        this.cost = 20,
        this.type = "usable",
        this.use = function heal(){
            health += 20;
        }
    }
}

class LHP{
    constructor(){
        this.name = "Large Health Potion",
        this.cost = 50,
        this.type = "usable",
        this.use = function heal(){
            health += 40;
        }
    }
}
