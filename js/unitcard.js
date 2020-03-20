function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
  }

function addAvatar(unit){
    let avatar = document.createElement('div');
    avatar.className = "avatar small";
    let imageTag = document.createElement('img');
    
    checkImage( imageSrc + unit.image, 
    function(){ imageTag.src = imageSrc + unit.image; }, 
    function(){ let ancestor = getUnitFirstAncestor(globalInput, unit);
                imageTag.src = imageSrc + ancestor.image; 
    });

    avatar.appendChild(imageTag);

    avatar.onclick = function(){
        document.body.innerHTML = "";
        mainUnitOnPage = unit.id;
        generatePageForMainUnit();

    };
    
    avatar.onmouseover = function(){
    avatar.style = "cursor: pointer;";
    }

    return avatar;

}

function addSubgects(subjSum){
    let subject = document.createElement('div');
    subject.className = "person subjects";

    let rmb = document.createElement('img');
    rmb.src = "./images/image_12.png";

    let subjNum = document.createElement('div');
    subjNum.innerText = subjSum;

    subject.appendChild(rmb);
    subject.appendChild(subjNum);

    return subject;
}

function addAddressing(unit, subjectNum){
    let addressing = document.createElement('div');
    addressing.className = "person addressing";

    let unitName = document.createElement('div');
    unitName.className = "person name";
    unitName.innerText = unit.name;

    /*
    unitName.onmouseover = function(){
        unitName.style = "border-bottom: 1px solid white;";
    };
    unitName.onmouseleave = function(){
        unitName.style = "border-bottom: none;";
    };
    */

    let unitNameStr = unit.name;
    if(unitNameStr.length > 20){
        unitName.style.fontSize = '27px';
    }

    let unitTitle = document.createElement('div');
    unitTitle.className = "person title";
    unitTitle.innerText = unit.post;

    addressing.appendChild(unitName);
    addressing.appendChild(unitTitle);

    addressing.onclick = function(){
        document.body.innerHTML = "";
        mainUnitOnPage = unit.id;
        generatePageForMainUnit();

    };
    /*
    if( subjectNum > 0){
        addressing.onclick = function(){
            let unitSubj = getUnitChildren(globalInput, unit);
            document.body.appendChild(generateUnitDeck(unitSubj));
        };*/

    addressing.onmouseover = function(){
        addressing.style = "cursor: pointer;";
    };
  

    return addressing;
}

function generateUnitCard(unit){
    let unitCard = document.createElement('div');
    unitCard.className = "person card " + unit.id;

    let subjectNum = getAllDecendants(globalInput, unit);

    unitCard.appendChild(addAvatar(unit));
    if(subjectNum > 0 && unit.parent > 0){
        unitCard.appendChild(addSubgects(subjectNum));
    }
    
    unitCard.appendChild(addAddressing(unit,subjectNum));

    return unitCard;

}

function generateUnitDeck(unitArray){
    let unitDeck = document.createElement('div');
    unitDeck.className = "person deck";

    for(let i = 0; i < unitArray.length; i++){
        unitDeck.appendChild(generateUnitCard(unitArray[i]));
    }

    return unitDeck;

}

