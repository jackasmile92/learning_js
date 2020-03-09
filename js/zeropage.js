function generateZeroPage () {
    let firstUnit = getHighestUnit(globalInput);
    let countryArray = getUnitSiblings(globalInput, firstUnit);
    countryArray.push(firstUnit);
    countryArray = sortUnitArrayById(countryArray);
    
    let page = document.createElement('div');
    page.className = 'bg';
    let groupP = document.createElement('div');
    groupP.className = 'Group_102';

    let logo = document.createElement('div');
    logo.className = "image_10";
    let wolf = document.createElement('img');
    wolf.src = "./images/logo.png";
    logo.appendChild(wolf);

    let countryFrame = document.createElement('div');
    countryFrame.className ="Frame_3";

    let classNameArray = ["Group_76","Group_74","Group_75"];

    for(let i = 0; i < 3; i++){
        let country = document.createElement('div');
        country.className = classNameArray[i];
        let ava = document.createElement('div');
        ava.className = "avatar_1-0";

        let img = document.createElement('img');
        img.src = "./images/"+ countryArray[i].image;

        ava.appendChild(img);

        let countyName = document.createElement('div');
        countyName.id =  countryArray[i].name;
        
        countyName.innerHTML = countryArray[i].name;
        ava.onclick = function(){
                    alert(countryArray[i].name);
        };
        ava.onmouseover = function(){
            ava.style = "cursor: pointer;";
        }

        countyName.onmouseover = function(){
            countyName.style = "border-bottom: 1px solid #DBAE64; cursor: pointer;";
        };
        countyName.onmouseout = function(){
            countyName.style = "border-bottom: none;";
        };
        
        countyName.onclick = function(){
            alert(countryArray[i].name);
        };


        country.appendChild(ava);
        country.appendChild(countyName);

       
        countryFrame.appendChild(country);
    }

    groupP.appendChild(logo);
    groupP.appendChild(countryFrame);

    page.appendChild(groupP);

    return page;

}
