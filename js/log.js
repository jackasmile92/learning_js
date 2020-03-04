//alert('AAAAAAAA');
//alert(varts);
//alert(input.length);
 var btn;
/*for (var prop in input) {
    console.log(input[prop].id);
    document.body.appendChild(unitCard(getUnitFromArray(input, input[prop].id))); 
    
  }
*/


//document.body.appendChild(unitCard(getUnitParentUnit(input, input[2]))); 
//document.body.appendChild(unitCard(input[2])); 

//onsole.log(getUnitParentId(input[2]));
//console.log(input[1].parent_id);
/*let childArray = getUnitChildren(input, input[0]);

for (var prop in childArray) {
  document.body.appendChild(unitCard(childArray[prop])); 
  
}
*/
/*let siblingPos = 5;
let sibling =  input[siblingPos];

document.body.appendChild(unitCard(sibling)); 
document.body.appendChild(unitCard(getNextSibling(input, sibling))); 
document.body.appendChild(unitCard(getPreviousSibling(input, sibling))); 

let siblings = getUnitSiblings(input, sibling);
siblings.push(sibling);

siblings = sortUnitArrayById(siblings);

for (var prop in siblings) {
  document.body.appendChild(unitCard(siblings[prop])); 
  console.log(siblings[prop].id);
  console.log(siblings[prop].parent);
  
  
}*/
let vassal = input[getPositionInArrayById(input,mainUnitOnPage)];

document.body.appendChild(unitCard(vassal));

let childrenArray = getUnitChildren(input, vassal);

for (var prop in childrenArray) {
  document.body.appendChild(unitCard(childrenArray[prop])); 
}

var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  const removeElements = (elms) => elms.forEach(el => el.remove());
  removeElements( document.querySelectorAll(".unit") );
  
  mainUnitOnPage = mainUnitOnPage + 1;
vassal = input[getPositionInArrayById(input,mainUnitOnPage)];

document.body.appendChild(unitCard(vassal));
childrenArray = getUnitChildren(input, vassal);

for (var prop in childrenArray) {
  document.body.appendChild(unitCard(childrenArray[prop])); 
}
});
