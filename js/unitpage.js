function generateUnitDeck(unitArray){
    let unitDeck = document.createElement('div');
    unitDeck.className = "person deck";

    for(let i = 0; i < unitArray.length; i++){
        unitDeck.appendChild(generateUnitCard(unitArray[i]));
    }

    return unitDeck;

}