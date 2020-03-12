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
    
    checkImage( './images/'+unit.image, 
    function(){ imageTag.src = './images/'+unit.image; }, 
    function(){ let ancestor = getUnitFirstAncestor(globalInput, unit);
                imageTag.src = './images/'+ ancestor.image; 
    });

    avatar.appendChild(imageTag);

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

function addAddressing(unit){
    let addressing = document.createElement('div');
    addressing.className = "person addressing";

    let unitName = document.createElement('div');
    unitName.className = "person name";
    unitName.innerText = unit.name;

    let unitTitle = document.createElement('div');
    unitTitle.className = "person title";
    unitTitle.innerText = unit.post;

    addressing.appendChild(unitName);
    addressing.appendChild(unitTitle);

    return addressing;
}

function generateUnitCard(unit){
    let unitCard = document.createElement('div');
    unitCard.className = "person card " + unit.id;

    let subjectNum = getAllDecendants(globalInput, unit);

    unitCard.appendChild(addAvatar(unit));
    if(subjectNum > 0 ){
        unitCard.appendChild(addSubgects(subjectNum));
    }
    
    unitCard.appendChild(addAddressing(unit));

    return unitCard;

}