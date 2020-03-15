
function generatePage(unit){
    let page = document.createElement('div');
  
    page.appendChild(generateTopNavigation(unit));
    page.appendChild(generateMiddlePart(unit));
    let unitSubj = getUnitChildren(input, unit);
    page.appendChild(generateUnitDeck(unitSubj));
  
    return page;
  }