var isertedWords = prompt("Enter your sentence while spacing");
//Prompts the user to enter words while spacing in between
var convertedWords = isertedWords.split(" ");
//converts the inserted words to an array using the .split(" ")function
//the parameters implies what separates the words in the sentence
//in our case spaces
var newArray = convertedWords.filter(word => word.length > 3);
//a new variable is declared called newArray
//there is a javascript method called.filter which is used to check whether the criteria defined has been met
//for our case if the letters forming the words in the array are greater than three
{
  console.log(newArray);
  //outputs only those words whose letters are greater than three
  console.log(newArray.join("-"));
  //.join is a javascript method that reverts back the initial data
  //type and the parameters splitted by either space or hyphen or comma depending on your prefered choice

}
