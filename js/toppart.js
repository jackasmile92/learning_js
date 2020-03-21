function generateTopNavigation(unit){
    let topNavigation = document.createElement('div');
    topNavigation.className = "top_navigation";    

    let topLevel = document.createElement('div');
    topLevel.className = "top level link";    

    let back = document.createElement('div');
    back.className = "back";   
    back.innerText = "Back"; 

    topLevel.appendChild(back);

    let topLevelLine = document.createElement('hr');
    topLevel.appendChild(topLevelLine);

    topLevel.onclick = function(){
        document.body.innerHTML = "";
        let prevUnit = getPreviousSibling(globalInput, unit);
        mainUnitOnPage = unit.parent;
        generatePageForMainUnit();
    };
    topLevel.onmouseover = function(){
        topLevel.style = "cursor: pointer;";
        var x = topLevel.getElementsByTagName("hr");
        x[0].style = "visibility: visible;"; 
    };

    topLevel.onmouseout = function(){
        var x = topLevel.getElementsByTagName("hr");
        x[0].style = "visibility: hidden;"; 
     }

    let zeroLevel = document.createElement('div');
    zeroLevel.className = "zero level link";      
   
    let logo = document.createElement('img');
    logo.src = imageSrc + "logo.png";
    
    zeroLevel.appendChild(logo);

    zeroLevel.onclick = function(){
        document.body.innerHTML = "";
        let prevUnit = getPreviousSibling(globalInput, unit);
        mainUnitOnPage = 0;
        generatePageForMainUnit();
    };

    zeroLevel.onmouseover = function(){
        zeroLevel.style = "cursor: pointer;";
    };

    topNavigation.appendChild(topLevel);
    topNavigation.appendChild(zeroLevel);

    return topNavigation;
}