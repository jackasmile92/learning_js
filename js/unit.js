function makeUnit( id = -1 , name = '', image = '', post = '', parent = 0) {
    return {
        id: id,
        name: name,
        image: image,
        post: post,
        parent: parent
    }
}

/*
function getUnitFromArray( unitArray, id ){
    for (var unit in unitArray) {
        if (unitArray[unit].id == id ) {
            return makeUnit(unitArray[unit].id, 
                            unitArray[unit].name, 
                            unitArray[unit].image, 
                            unitArray[unit].post, 
                            unitArray[unit].parent);
        } 
    }    
    return  makeUnit();  

}
*/


function getPositionInArrayById(unitArray, id){
    for(let i = 0; i < unitArray.length; i++){
        if(unitArray[i].id == id){
            return i;
        }
    }

    return -1;
}


function isUnitInArray(unitArray, id){
    if(getPositionInArrayById(unitArray, id) >= 0){
        return true;
    }
    return false;   
}

function getUnitByID(unitArray, id){

    if(isUnitInArray(unitArray, id)){
        return(unitArray[getPositionInArrayById(unitArray, id)]);
    }

    return makeUnit();
}

function getUnitParentId(unit){
    if(unit.parent) {
        return unit.parent;
    }
    return -1;
}

function getUnitParentUnit(unitArray, unit){
    let parent = getUnitParentId(unit);

    if (parent > 0){
        for (var i in unitArray) {
            if (unitArray[i].id == parent) {
                return makeUnit(unitArray[i].id, 
                                unitArray[i].name, 
                                unitArray[i].image, 
                                unitArray[i].post,
                                unitArray[i].parent);
            } 
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
                                        unitArray[i].post,
                                        unitArray[i].parent));
        } 
    }    
    return  childrenArray;  

}

function isAnyChild(unitArray, unit){
    for (var i in unitArray) {
        if (getUnitParentId(unitArray[i]) == unit.id ) {
           return true;
        } 
    }    
    return  false;  

}

function getUnitClildrenNum(unitArray,unit){
    return getUnitChildren(unitArray, unit).length;
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
        sortedArray.push(getUnitByID(unitArray, idArray[i]));
    }

    return sortedArray;

}

function getUnitSiblings(unitArray, unit){
    let siblingArray = [];

    for (var i in unitArray) {
        if (unitArray[i].parent == unit.parent && unitArray[i].id !== unit.id) {
            siblingArray.push( makeUnit(unitArray[i].id, 
                                        unitArray[i].name, 
                                        unitArray[i].image, 
                                        unitArray[i].post,
                                        unitArray[i].parent));
        } 
    }    
    return  siblingArray;  

}

function getSibling(unitArray, unit, orderInd = 'ASC'){
    let siblingArray = getUnitSiblings(unitArray,unit);
    siblingArray.push(unit);
    siblingArray = sortUnitArrayById(siblingArray,orderInd);

    let pos = getPositionInArrayById(siblingArray,unit.id);
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

function getUnitFirstAncestor(unitArray,unit){
    let ancestor = getUnitParentUnit(unitArray,unit);

    while(ancestor.parent !== 0 && unit.parent !== undefined){
        ancestor = getUnitParentUnit(unitArray,ancestor);
    }
    
    return ancestor;
}


function getUnitLevel(unitArray, unit){
    let unitLevel = 0; 

    if(unit.parent !== 0 && unit.parent !== undefined){
        unitLevel+=1;  
        let ancestor = getUnitParentUnit(unitArray,unit);
    
   
        while(ancestor.parent !== 0 && unit.parent !== undefined){
            
            ancestor = getUnitParentUnit(unitArray,ancestor);
            unitLevel+=1;
        }
    
    }

     

    return unitLevel;
}

function getHighestUnit(unitArray){
    let sortedArray = sortUnitArrayById(unitArray);

    for(let i = 0; i < sortedArray.length; i++){
        if (getUnitLevel(sortedArray, sortedArray[i]) == 0 ){

            return sortedArray[i];
        }
    }   

    return makeUnit();
}

function isSingleChild(unitArray, unit){
    let siblingArray = getUnitSiblings(unitArray, unit);

    if(siblingArray.length == 0){
        return true;
    }

    return false;
}


function getAllDecendants(unitArray, unit){
    let desSum = 0;

    if(isAnyChild(unitArray, unit)){
        let childrenArray = getUnitChildren(unitArray, unit);

        desSum += childrenArray.length;

        for(let i = 0 ; i < childrenArray.length;  i++){
            desSum +=  getAllDecendants(unitArray, childrenArray[i]);
        }
    }

    return desSum;
}