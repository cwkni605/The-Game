var characterNameList = ["Eve","Alex","Greg","Jessie"];

function randomClass(specific){
    var rand = Math.ceil(Math.random()*5);
    if(specific !== undefined){
        rand = specific
    }
    if(rand == 1){
        return new tank();
    }
    else if(rand == 2){
        return new caster();
    }
    else if(rand == 3){
        return new archer();
    }
    else if(rand == 4){
        return new swordman();
    }
    else if(rand == 5){
        return new assassin();
    }
}

class tank{
    constructor(){
        this.name = characterNameList[Math.floor(Math.random() * characterNameList.length)];
        this.class = "tank";
    }
}

class caster{
    constructor(){
        this.name = characterNameList[Math.floor(Math.random() * characterNameList.length)];
        this.class = "caster";
    }
}

class archer{
    constructor(){
        this.name = characterNameList[Math.floor(Math.random() * characterNameList.length)];
        this.class = "archer";
    }
}

class swordman{
    constructor(){
        this.name = characterNameList[Math.floor(Math.random() * characterNameList.length)];
        this.class = "swordman";
    }
}

class assassin{
    constructor(){
        this.name = characterNameList[Math.floor(Math.random() * characterNameList.length)];
        this.class = "assassin";
    }
}
