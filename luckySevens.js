


function play() {

    var startBet = parseFloat(document.getElementById("starting-bet").value);
    var money = startBet;
    var diceSum = 0;
    var maxMoney = 0;
    var rolls = 0;
    var maxRolls = 0;

    
    if (money <= 0) {
        alert("Please place a bid greater that $0")
    }

    while (money > 0) {
        var diceOne = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;
        diceSum = diceOne + diceTwo;
        rolls++;
        if (diceSum !=7) {
            money--;
        } else {
            money += 4;
            if(money > maxMoney){
                maxMoney += (money - maxMoney)
                maxRolls = rolls;
            }
        }

    }

   
        document.getElementById("results").style.display = "block";
        document.getElementById("startBet").value = "$" + startBet;
        document.getElementById("totalRolls").value = rolls;
        document.getElementById("maxMoney").value = "$" + maxMoney;
        document.getElementById("maxRolls").value = maxRolls;
    

}

function reset() {
    document.getElementById("results").style.display = "none";
    document.getElementById("startBet").value = 0;
    document.getElementById("totalRolls").value = 0;
    document.getElementById("maxMoney").value = 0;
    document.getElementById("maxRolls").value = 0;
}





