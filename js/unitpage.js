
function generatePage(unit){
    let page = document.createElement('div');
    page.className = "unit page";
    if (unit.id > 0){
      page.appendChild(generateTopNavigation(unit));
    }
    page.appendChild(generateMiddlePart(unit));
    let unitSubj = getUnitChildren(input, unit);
    page.appendChild(generateUnitDeck(unitSubj));

    return page;
  }

function generatePageForMainUnit(){
  let idUnit = mainUnitOnPage;
  let unit = getUnitByID(input,idUnit);
  if (unit.name != ''){
    document.title = 'Witcher | ' + unit.name;
  }else{
    document.title = 'Witcher';
  }
  document.body.appendChild(generatePage(unit)); 
  window.scrollTo( 0, 0 );

}