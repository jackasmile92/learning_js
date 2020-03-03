//alert('AAAAAAAA');
//alert(varts);
//alert(input.length);
 var btn;
for (var prop in input) {
    console.log(input[prop].id);
   btn  = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = input[prop].name;                   // Insert text
document.body.appendChild(btn);  
  }