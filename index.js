let hands = ["🖐", "✌","✊"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let ganador = document.getElementById("ganador")

fightButton.addEventListener("click", function() {
    
    function getHand(){
        return hands[Math.floor(Math.random() * hands.length)]
    }

    let play1 = getHand()
    let play2 = getHand()
    stageEl.textContent = play1 + " VS " + play2

    if(play1 === "🖐" && play2 === "✌" || play2 === "🖐" && play1 === "✌"){
        ganador.textContent = "Gana ✌"
    } else if (play1 === "✊" && play2 === "✌" || play2 === "✊" && play1 === "✌"){
        ganador.textContent = "Gana ✊"
    }else if (play1 === "🖐" && play2 === "✊" || play2 === "🖐" && play1 === "✊"){
        ganador.textContent = "Gana 🖐"
    } else {
        ganador.textContent = "Es empate!!"
    }
}
)