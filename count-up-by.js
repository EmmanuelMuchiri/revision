var numberOne=parseFloat (prompt("Enter the first number"));
//declared a varibale numberOne which is getting input from the user
//converted to a float
//this will not allow any other data type e.g string
var lastNumber=parseFloat (prompt("Enter the last number"));
//declared a varibale lastNumber which is getting input from the user
//converted to a float
//this will not allow any other data type e.g string
newArray=[]
//initialize a new array to an empty array of which the new numbers from the loop will be pushed
if ((numberOne >0 && lastNumber>0)&&(lastNumber>numberOne))
//the first condition checks whether the values are greater than zero.if so proceed with the loop
//the second condition checks whether the last number is greater than the first one.if so proceed with the loop
//the && operator ensures that both conditions are working not either of the two conditions.
{
//begin the if statement
for (check=numberOne;check<=lastNumber;check+=numberOne)
//declared new variable  called check which we verfiy that the lastnumber is less than and equal to check
//the last part for loop that is.. (check+=numberOneit)  is fact of increment
//
{
//this is the begin a new method
newArray.push(check);
//.(newArray.push) is creation of new array from the (newArray)
}
//rhis is console to get the newArray
console.log(newArray);
}
else
//the part is for passing the second part of the if statement where if the ((numberOne >0 && lastNumber>0)&&(lastNumber>numberOne)) is not passed check the second bit
{
alert ("Values must be : \n 1 ) greater than zero \n 2 ) and should not be text \n 3 )The second value should be greater than the first value");
// the output when the second bit comes
}
