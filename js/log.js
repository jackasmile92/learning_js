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

let siblings = getUnitSiblings(input, input[0]);
siblings.push(input[0]);

for (var prop in siblings) {
  document.body.appendChild(unitCard(siblings[prop])); 
  
}