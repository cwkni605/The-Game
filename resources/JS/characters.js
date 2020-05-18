var characterNameList = ["Eve","Alex","Greg","Jessie"];

class tank{
    constructor(){
        this.name = characterNameList[Math.round(Math.random() * characterNameList.length)];
        this.class = "tank";
    }
}

class caster{
    constructor(){
        this.name = characterNameList[Math.round(Math.random() * characterNameList.length)];
        this.class = "caster";
    }
}
