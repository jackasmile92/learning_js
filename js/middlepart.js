function generateMiddlePart(unit){
    let middlePart = document.createElement('div');
    middlePart.className =  "middle part";

    let mainUnitNavigation = document.createElement('div');
    mainUnitNavigation.className = "main unit navigation";

    let previousUnit = document.createElement('div');
    previousUnit.className = "previous unit";

    let ellLeft = document.createElement('img');
    ellLeft.className = "ell";
    ellLeft.src = "./images/Ellipse.png";

    let arrowLeft = document.createElement('img');
    arrowLeft.className = "arrow";
    arrowLeft.src = "./images/left.png";

    previousUnit.appendChild(ellLeft);
    previousUnit.appendChild(arrowLeft);

    let nextUnit = document.createElement('div');
    nextUnit.className = "next unit";

    let ell = document.createElement('img');
    ell.className = "ell";
    ell.src = "./images/Ellipse.png";

    let arrow = document.createElement('img');
    arrow.className = "arrow";
    arrow.src = "./images/left.png";

    nextUnit.appendChild(ell);
    nextUnit.appendChild(arrow);

    let mainUnitAvatar = document.createElement('div');
    mainUnitAvatar.className = "main unit avatar";

    let avatar = document.createElement('img');

    checkImage( './images/'+unit.image, 
    function(){ avatar.src = './images/'+unit.image; }, 
    function(){ let ancestor = getUnitFirstAncestor(globalInput, unit);
                avatar.src = './images/'+ ancestor.image; 
    });
    
    mainUnitAvatar.appendChild(avatar);

    mainUnitNavigation.appendChild(previousUnit);
    mainUnitNavigation.appendChild(mainUnitAvatar);
    mainUnitNavigation.appendChild(nextUnit);

    let mainUnitName = document.createElement('div');
    mainUnitName.className = "main unit name";

    let mainUnitNameP = document.createElement('p');
    mainUnitNameP.innerText = unit.name;

    mainUnitName.appendChild(mainUnitNameP);

    
    let unitTitle = document.createElement('div');
    unitTitle.className = "person title";
    
    if( unit.post !== undefined){
        unitTitle.innerText = unit.post;
    };

    mainUnitName.appendChild(unitTitle);

    let decoration = document.createElement('div');
    decoration.className = "decoration";

    let decorationImg = document.createElement('img');
    decorationImg.src = "./images/icon_01.png";

    decoration.appendChild(decorationImg);

    middlePart.appendChild(mainUnitNavigation);
    middlePart.appendChild(mainUnitName);
    middlePart.appendChild(decoration);

    return middlePart;
}