function makeUnit( id, name, image, parent = 0) {
    return {
        id: id,
        name: name,
        image: image,
        parent: parent
    }
}

function getUnitFromArray( unitArray, id ){
    for (var unit in unitArray) {
        if (unitArray[unit].id == id ) {
            return makeUnit(unitArray[unit].id, 
                            unitArray[unit].name, 
                            unitArray[unit].image, 
                            unitArray[unit].parent);
        } 
    }    
    return  makeUnit();  

}

function getPositionInArrayById(unitArray, id){
    for(let i = 0; i < unitArray.length; i++){
        if(unitArray[i].id == id){
            return i;
        }
    }

    return -1;
}


function isUnitInArray(unitArray, id){
    if(getPositionInArrayById > 0){
        return true;
    }
    return false;   
}

function getUnitParentId(unit){
   return unit.parent
}

function getUnitParentUnit(unitArray, unit){
    let parent = getUnitParentId(unit);

    for (var i in unitArray) {
        if (unitArray[i].id == parent) {
            return makeUnit(unitArray[i].id, 
                            unitArray[i].name, 
                            unitArray[i].image, 
                            unitArray[i].parent);
        } 
    }    
    return  makeUnit();  
}

function getUnitChildren(unitArray, unit){
    let childrenArray = [];
    
    for (var i in unitArray) {
        if (getUnitParentId(unitArray[i]) == unit.id ) {
           childrenArray.push( makeUnit(unitArray[i].id, 
                                        unitArray[i].name, 
                                        unitArray[i].image, 
                                        unitArray[i].parent));
        } 
    }    
    return  childrenArray;  

}

function sortUnitArrayById(unitArray, orderInd = 'ASC') {
    let sortedArray = [];

    let idArray = [];
    for(let i in unitArray){
        idArray.push(unitArray[i].id);
    }
    
    if (orderInd == 'ASC' && unitArray.length > 0 ){
        let minId;
        
        for(let i = 0; i < idArray.length; i++){
            minId = i;

            for(let j = (i + 1); j < idArray.length; j++){
                if(idArray[minId] > idArray[j]){
                    minId = j;
                }
            } 

            let temp =       idArray[i];
            idArray[i] =     idArray[minId];
            idArray[minId] = temp;
        }
        
    }

    if (orderInd == 'DESC' && unitArray.length > 0 ){
        let maxId;
        
        for(let i = 0; i < idArray.length; i++){
            maxId = i;

            for(let j = (i + 1); j < idArray.length; j++){
                if(idArray[maxId] < idArray[j]){
                    maxId = j;
                }
            } 

            let temp =       idArray[i];
            idArray[i] =     idArray[maxId];
            idArray[maxId] = temp;
        }
        
    }

    for(let i in idArray){
        sortedArray.push(getUnitFromArray(unitArray, idArray[i]));
    }

    return sortedArray;

}

function getUnitSiblings(unitArray, unit){
    let siblingArray = [];

    for (var i in unitArray) {
        if (getUnitParentId(unitArray[i]) == getUnitParentId(unit) && unitArray[i].id !== unit.id) {
            siblingArray.push( makeUnit(unitArray[i].id, 
                                        unitArray[i].name, 
                                        unitArray[i].image, 
                                        unitArray[i].parent));
        } 
    }    
    return  siblingArray;  

}

function getSibling(unitArray,unit, orderInd = 'ASC'){
    let siblingArray = getUnitSiblings(unitArray,unit);
    siblingArray.push(unit);
    siblingArray = sortUnitArrayById(siblingArray,orderInd);

    let pos = getPositionInArrayById(siblingArray,unit.id);
    console.log(pos);
    if( pos + 2 > siblingArray.length){
        return siblingArray[0];
    }
    
    return siblingArray[pos + 1];
}


function getNextSibling(unitArray,unit){
    return getSibling(unitArray,unit,'ASC');
}

function getPreviousSibling(unitArray,unit){
    return getSibling(unitArray,unit,'DESC');
}


function unitCard(unit){
    let card = document.createElement('div');
    let imageTag = document.createElement('img');
    let nameTag = document.createElement('p');

    imageTag.src = './images/'+unit.image;
    nameTag.innerText = unit.name;
    
    card.appendChild(imageTag);
    card.appendChild(nameTag);
    
    return card
}