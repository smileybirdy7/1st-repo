//this is a boolean var
var levelLocked = true;
//Number of times a user can enter a password.
var attempts = 3;

//Declares a function.
function PasswordPrompt (){
 //this is a string var
 var myPassword = prompt("Enter password");
 //this tests if myPassword is a certain string
 
   if (myPassword == "ou812") {
   //if true this changes the bool to false 
    levelLocked = false;
} else {
    //Also tests for the number of login attempts.
    //Decreases attempts.
    if (attempts > 0) {
    attempts--;
    //Recall of the function if false.
    PasswordPrompt();
    }
}
//Calls the funciton.
PasswordPrompt();

//this will test if levelLocked is true
if (levelLocked){
    alert("This level is locked.");
} else {
    alert("The level is unlocked.");
}