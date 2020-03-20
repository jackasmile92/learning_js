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

    if (isSingleChild(globalInput, unit) == false){
        previousUnit.onclick = function(){
            document.body.innerHTML = "";
            let prevUnit = getPreviousSibling(globalInput, unit);
            mainUnitOnPage = prevUnit.id;
            generatePageForMainUnit();
       
        };
        previousUnit.onmouseover = function(){
            previousUnit.style = "cursor: pointer;";
            var x = previousUnit.getElementsByClassName("ell");
            x[0].style = "visibility: visible;";
         }
        previousUnit.onmouseout = function(){
            var x = previousUnit.getElementsByClassName("ell");
            x[0].style = "visibility: hidden;"; 
         }
    }else{
        previousUnit.style = "visibility: hidden;";
    };

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

    if (isSingleChild(globalInput, unit) == false){
        nextUnit.onclick = function(){
            document.body.innerHTML = "";
            let nextUnit = getNextSibling(globalInput, unit);
            mainUnitOnPage = nextUnit.id;
            generatePageForMainUnit();
      
        };
        nextUnit.onmouseover = function(){
            nextUnit.style = "cursor: pointer;"
            var x = nextUnit.getElementsByClassName("ell");
            x[0].style = "visibility: visible;";
        }
        nextUnit.onmouseout = function(){
            var x = nextUnit.getElementsByClassName("ell");
            x[0].style = "visibility: hidden;"; 
        }
    }else{
        nextUnit.style = "visibility: hidden;";
    };

    let mainUnitAvatar = document.createElement('div');
    

    let avatar = document.createElement('img');   
   
    if(unit.id > 0){
        mainUnitAvatar.className = "main unit avatar";
        checkImage( imageSrc + unit.image, 
        function(){ avatar.src = imageSrc + unit.image; }, 
        function(){ let ancestor = getUnitFirstAncestor(globalInput, unit);
                    avatar.src = imageSrc + ancestor.image; 
        });
        mainUnitAvatar.appendChild(avatar);
        mainUnitNavigation.appendChild(previousUnit);
        mainUnitNavigation.appendChild(mainUnitAvatar);
        mainUnitNavigation.appendChild(nextUnit);
    }else{
        mainUnitAvatar.className = "zero avatar";
        avatar.src = "./images/logo.png";
        mainUnitAvatar.appendChild(avatar);
        mainUnitNavigation.appendChild(mainUnitAvatar);    
    }

    let mainUnitName = document.createElement('div');
    mainUnitName.className = "main unit name";

    let mainUnitNameP = document.createElement('p');
    mainUnitNameP.innerText = unit.name;

    mainUnitName.appendChild(mainUnitNameP);

    if(unit.id > 0){
        
        let unitTitle = document.createElement('div');
        unitTitle.className = "person title";
        
        if( unit.post !== undefined){
            unitTitle.innerText = unit.post;
        };

        mainUnitName.appendChild(unitTitle); 
        
        middlePart.appendChild(mainUnitNavigation);
        middlePart.appendChild(mainUnitName);
        
        if(getUnitClildrenNum(globalInput, unit) > 0){
            
            let decoration = document.createElement('div');
            decoration.className = "decoration";

            let decorationImg = document.createElement('img');
            decorationImg.src = "./images/icon_01.png";

            decoration.appendChild(decorationImg);
            middlePart.appendChild(decoration);
        }


        
    } else {
        middlePart.appendChild(mainUnitNavigation);
    }

    return middlePart;
}