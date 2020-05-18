function printScreen()
{
    var screen = "";
    var stats = "";
    var menu =  "";
    document.getElementById("screen").innerHTML = screen;
    document.getElementById("status").innerHTML = stats;
    document.getElementById("menu").innerHTML = menu;
}

var currentMap = "Inn";
var gold = 100;
var invintory = [];

function printAction(input)
{
    var out = document.getElementById("action").value;
    if(out == undefined)
    {
        out = document.getElementById("action").innerHTML;
    }
    if(input == storeList)
    {
        for(i = 0; i < storeList.length; i++)
        {
            out += "<p style='margin: 0px;'>" + storeList[i].name + " Gold: " + storeList[i].cost + "</p><br>";
        }
    }
    else
    {
        out += "<p style='margin: 0px;'>" + input + "</p><br>";
    }
    document.getElementById("action").innerHTML=out;
}

printScreen();

function inputReader(input)
{
    if(stateMSBM == 0)//movement
    {
        if(input=="w"||input=="W")
        {
            moveUp();
            document.getElementById("input").value="";
        }
        else if(input=="a"||input=="A")
        {
            moveLeft();
            document.getElementById("input").value="";
        }
        else if(input=="s"||input=="S")
        {
            moveDown();
            document.getElementById("input").value="";
        }
        else if(input=="d"||input=="D")
        {
            moveRight();
            document.getElementById("input").value="";
        }
        else if(input == "m" || input == "M")//menu button
        {
            magic -= 30;
            printScreen();
        }
        if(health <= 0)
        {
            die();
        }
        if(magic < 0)
        {
            health += magic;
            magic = 0;
            printScreen();
        }
    }
    else if(stateMSBM == 1)//store
    {
        Store();
    }
    else if(stateMSBM == 2)//battle
    {
        battle();
    }
    if(stateMSBM == 3)//menu
    {
        stateMSBM = 0;
        console.log("menu state working");
    }
}

function getPos()
{
    var pos = {
        Y:0,
        X:0
    };
    for(var y = 0; y<maps[currentMap].length-1; y++)
    {
        for(var x = 0; x<maps[currentMap][y].length; x++)
        {
            if(maps[currentMap][y] [x] == "c")
            {
                pos.Y = y;
                pos.X = x;
                return pos;
            }
        }
    }
}

function die()
{
    
}

function Store()
{
    if(document.getElementById("input").value == "sell")
    {
        buySellState = 1;
        document.getElementById("input").value = "";
    }
    else if(document.getElementById("input").value == "buy")
    {
        buySellState = 0;
        document.getElementById("input").value = "";
    }
    if(document.getElementById("input").value == "m")
    {
        document.getElementById("input").value = "";
        stateMSBM = 0;
    }
    else if(buySellState == 0)
    {
        for(var i = 0; i < storeList.length; i++)
        {
            if(document.getElementById("input").value == storeList[i].name && gold >= storeList[i].cost)
            {
                gold -= storeList[i].cost;
                invintory.push(storeList[i]);
                document.getElementById("input").value = "";
                printScreen();
            }
        }
    }
    else if(buySellState == 1)
    {
        for(var i = 0; i < invintory.length; i++)
        {
            if(document.getElementById("input").value == invintory[i].name)
            {
                gold += invintory[i].cost/2;
                zuk(invintory,i);
                document.getElementById("input").value = "";
                printScreen();
            }
        }
    }
}

function battle()
{

    if(battleListDisplayed == false)
    {
        var out = "Attack<br>Run<br>"
        for(var i = 0; i < spellsList.length; i++)
        {
            out += spellsList[i].name + "<br>";
        }
        
        for(var i = 0; i < invintory.length; i++)
        {
            if(invintory[i].type == "usable")
            {
                out += invintory[i].name + "<br>";
            }
        }
        
        printAction(out);
        battleListDisplayed = true;
    }
    if(document.getElementById("input").value == "buy")
    {
        buySellState = 0;
        document.getElementById("input").value = "";
    }
    if(document.getElementById("input").value == "m")
    {
        document.getElementById("input").value = "";
        stateMSBM = 0;
    }
    else if(buySellState == 0)
    {
        for(var i = 0; i < storeList.length; i++)
        {
            if(document.getElementById("input").value == storeList[i].name && gold >= storeList[i].cost)
            {
                gold -= storeList[i].cost;
                invintory.push(storeList[i]);
                document.getElementById("input").value = "";
                printScreen();
            }
        }
    }
    else if(buySellState == 1)
    {
        for(var i = 0; i < invintory.length; i++)
        {
            if(document.getElementById("input").value == invintory[i].name)
            {
                gold += invintory[i].cost/2;
                zuk(invintory,i);
                document.getElementById("input").value = "";
                printScreen();
            }
        }
    }
}

function moveUp()
{
    var pos = getPos();
    try{
        if(maps[currentMap][pos.Y-1] [pos.X] == "_"){
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y-1] [pos.X] = "c";
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1] [0])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
            }
        }
    }
    catch(err){
    }
    printScreen();
}
function moveDown()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y+1] [pos.X] == "_"){
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y+1] [pos.X] = "c";
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1] [0])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveLeft()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y] [pos.X-1] == "_"){
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y] [pos.X-1] = "c";
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1] [0])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveRight()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y] [pos.X+1] == "_"){
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y] [pos.X+1] = "c";
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1] [0])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}

function battleStarter() {
    var cost = 0;
    var totalCost = maps[currentMap][maps[currentMap].length-1] [1];
    var tempMonsterList = [];
    while (totalCost >= cost) {
        var i = Math.round(Math.random()*(monsters.length-1));
        tempMonsterList.push(monsters[i]);
        cost += monsters[i].cost;
        console.log(tempMonsterList);
    }
    tempMonsterList.pop();
}
battleStarter();