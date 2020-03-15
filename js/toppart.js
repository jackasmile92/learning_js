function generateTopNavigation(unit){
    let topNavigation = document.createElement('div');
    topNavigation.className = "top_navigation";    

    let topLevel = document.createElement('div');
    topLevel.className = "top level link";    

    let back = document.createElement('div');
    back.className = "back";   
    back.innerText = "Back"; 

    topLevel.appendChild(back);

    let zeroLevel = document.createElement('div');
    zeroLevel.className = "zero level link";      
   
    let logo = document.createElement('img');
    logo.src = "./images/logo.png";
    
    zeroLevel.appendChild(logo);

    topNavigation.appendChild(topLevel);
    topNavigation.appendChild(zeroLevel);

    return topNavigation;
}