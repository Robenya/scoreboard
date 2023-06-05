let hands = ["🖐", "✌","✊"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    function getHand(){
        return hands[Math.floor(Math.random() * hands.length)]
    }
    stageEl.textContent = getHand() + " VS " + getHand()
})