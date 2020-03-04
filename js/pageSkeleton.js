function unitCard(unit){
    let card = document.createElement('div');
    let imageTag = document.createElement('img');
    let nameTag = document.createElement('h3');
    let childTag = document.createElement('p');

    childTag.innerText = getUnitClildrenNum(globalInput, unit);
        
    nameTag.innerText = unit.name;
    card.className ='unit';

    if(unit.image){
        imageTag.src = './images/'+unit.image;
    }   
    else{
        let ancestor = getUnitFirstAncestor(globalInput, unit);
        imageTag.src = './images/'+ ancestor.image;
    }

    card.appendChild(imageTag);
    card.appendChild(childTag);
    card.appendChild(nameTag);
    
    if(unit.post){
         let postTag = document.createElement('h4');
         postTag.innerText = unit.post;
         card.appendChild(postTag); 
    }

    return card;
}

function mainUnit(unit){
    return unitCard(unit);
}

function nextUnit(unit){
    return unitCard(getNextSibling(globalInput, unit));
}

function previousUnit(unit){
    return unitCard(getPreviousSibling(globalInput, unit));
}

function higherUnit(unit){
    return unitCard(getPreviousSibling(globalInput, unit));
}


function unitRow(unitArray){
    let deck = document.createElement('div');
    let sortedCard = sortUnitArrayById(unitArray);

    for(let i in unitArray){
        deck.appendChild(unitCard(sortedCard[i]));
    }

    return deck;
}

function currentLevel(unit){
 
    let card = document.createElement('div');
    card.appendChild(previousUnit(unit));
    card.appendChild(mainUnit(unit));
    card.appendChild(nextUnit(unit));
    return card;
}

function lowerLevel(unit){
    let childArray = getUnitChildren(globalInput, unit); 
    return unitRow(childArray);
}

function upperLevel(unit){
    let unitParent = getUnitParentUnit(globalInput, unit);

    return higherUnit(unitParent);
}

function generatePage(){
    let unit = getUnitFromArray(globalInput, mainUnitOnPage);
    let page = document.createElement('div');

    page.appendChild(upperLevel(unit));
    page.appendChild(currentLevel(unit));
    page.appendChild(lowerLevel(unit));

    return page;
}