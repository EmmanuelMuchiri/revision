var shoppingItems = prompt("Enter your shopping list and separate with commas");
//declared a string called shoppingItems
var insertedItems = shoppingItems.split(",");
//declared and assigned a new variable from the previous variable shoppingItems sort of inheritance
//converted the string to an array using this javascript method .split() and eliminating the separator
var sortedItems = insertedItems.sort();
//declared a new variable sortedItems re-assigned from the previous variable insertedItems
//sorted the items in the array using a javascript method .sort()
sortedItems.forEach(function(item)
  //implementing the forEach loop and a callback function (.forEach) with parameters item declared
  //to be used inside the function only
  {
    console.log(item);
  });
//opening curly brace to mark the beginning of the callback function
//then output the item and closes the curly brace,parenthesis and the semi colon to mark the end of the program
