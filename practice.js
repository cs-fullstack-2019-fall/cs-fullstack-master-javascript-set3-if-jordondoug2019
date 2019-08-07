//alert("test");
// # JavaScript_Day1_If
// ### Create a new file for each exercise
//
// #### Exercise 6
// Create two variables
//     ```javascript
// var anyWord = [ANY NAME]
// var theSameWord = [ANY NAME]
// ```
// create an if statement comparing the two variables. If they are the same print
//     ```
// THAT IS...
// CORRECT!!!
// ```
//
// Else print
//     ```
// THAT IS...
// NOT CORRECT
// ```
//
// #### Exercise 7
// Ask the user for a number. If it’s positive, print “POSITIVE”. If it’s negative, print “NEGATIVE”. If it’s zero, print ZERO.
//
//     #### Exercise 8
// Prints ```CORRECT``` if 1, 2, or 3 is entered. Print ```ERROR``` for everything else.

// var anyWord= "Jordon";
// var theSameWord= "Jalen";
//
// if (anyWord ===theSameWord)
// {
//     alert("That's is correct!");
// }
// else
// {
//     alert("That is not correct!")
// }

var userNum= prompt("ENter a number");
if (userNum > 0 )
{
    alert("Positive")
}
else if (userNum < 0)
{
    alert("Negative")
}

else
{
    alert( "zero")
}