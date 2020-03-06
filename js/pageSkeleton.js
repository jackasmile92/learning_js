function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
  }

function unitCard(unit, className = ""){
    let card = document.createElement('div');
    let imgWrap = document.createElement('div');
    let imageTag = document.createElement('img');
    let nameTag = document.createElement('h3');

    let numRomb = document.createElement('div');
    numRomb.className = "childRomb";
    let imgRomb = document.createElement('div');
    imgRomb.className = "romb";
    let childNum = document.createElement('div');
    childNum.innerText = getAllDecendants(globalInput, unit);
    childNum.className = "childNum";

    numRomb.appendChild(imgRomb);
    numRomb.appendChild(childNum);

        
    nameTag.innerText = unit.name;
    card.className = className;
    
    checkImage( './images/'+unit.image, 
                function(){ imageTag.src = './images/'+unit.image; }, 
                function(){ let ancestor = getUnitFirstAncestor(globalInput, unit);
                            imageTag.src = './images/'+ ancestor.image; 
                });

    imgWrap.className = "picWrap";
    imageTag.className = "profilePic";
    
    imgWrap.appendChild(imageTag);
    card.appendChild(imgWrap);
    card.appendChild(numRomb);
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
    return unitCard(unit);
}


function unitRow(unitArray, className, unitClass){
    let deck = document.createElement('div');
    let sortedCard = sortUnitArrayById(unitArray);

    for(let i in unitArray){
        deck.appendChild(unitCard(sortedCard[i], unitClass));
    }

    deck.className = className;

    return deck;
}

function currentLevel(unit){
 
    let card = document.createElement('div');
    if(isSingleChild(globalInput,unit)){
        card.appendChild(mainUnit(unit));
    } else{    
        card.appendChild(previousUnit(unit));
        card.appendChild(mainUnit(unit));
        card.appendChild(nextUnit(unit));
    }
    return card;
}

function lowerLevel(unit){
    let childArray = getUnitChildren(globalInput, unit); 
    if(childArray.length > 0){
        return unitRow(childArray, 'childRow', 'child');
    }

    return document.createElement('div');;
}

function upperLevel(unit){
    let unitParent = getUnitParentUnit(globalInput, unit);

    return higherUnit(unitParent);
}

function generatePage(){
    let unit = getUnitByID(globalInput, mainUnitOnPage);
    let page = document.createElement('div');

    page.appendChild(upperLevel(unit));
    page.appendChild(currentLevel(unit));
    page.appendChild(lowerLevel(unit));

    return page;
}

function generateZeroPage(){
}