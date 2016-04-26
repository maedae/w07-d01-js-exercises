// PROBLEM 1
// ---------------------------
function sayHi() {
  var userName = prompt("What is your name?");
  alert("Hello, " + userName + "!");
}
// PROBLEM 2
//----------------------------
function evenOrOdd(){
  var inputNumber = prompt("Please input a number. I will determine if it is even or odd");
  //checks to see that input is a number. if not, alert user and call entire method again.
  if (isNaN(inputNumber){
    alert(inputNumber + "is not a valid number. Please try again.");
    evenOrOdd();
  } else {
    // if user input is perfectly divisible by 2, alerts user that number is even
    if (inputNumber % 2 == 0){
      alert("The number: " + inputNumber + " is even!");
      // if user input is not perfectly divisible by 2, alert user that number is odd
    } else {
      alert("The number: " + inputNumber + " is odd!");
    }
  }
}

// PROBLEM 3 
// -----------------------------
function numberPrompter(){
  var inputNumberPrompt = prompt("Enter a number.");
  // checks to see if user input is not a number. alerts user with error prompt and calls method to begin process again
  if (isNaN(inputNumberPrompt)){
    alert(inputNumberPrompt + "is not a valid number. Please try again.");
    numberPrompter();
  } else {
    // if number is greater than or equal to 3 and less than or equal to 11, alert user that they won
    if (inputNumberPrompt >= 3 && inputNumberPrompt =< 11){
      alert("Congratulations! " + inputNumberPrompt + " falls within the valid range!");
    } else {
      //alert user that their input doesn't fall within the range and call the parent function to begin the entire process again
      alert(inputNumberPrompt + " does not fall within the valid range. Please try again.");
      numberPrompter();
    }
  }
}

// PROBLEM 4 
// -----------------------------
function bottlesOfBeer(){
  //parses input into integer. non-numeric characters are turned into 0
  var setBeer = parseInt(prompt("Please enter a positive number."));
  
  //if input is not a valid number or less than/equal to 0, give error alert and call entire function again 
  if (setBeer <= 0){
    alert("Please enter a valid, even number");
    bottlesOfBeer();
  } else {
    alert("Check yo' console, son.");
    console.log("START GAME!");
    console.log("---------------------------------------------------------");
  }

 for (var i = setBeer; i > 0; i--){
    if (i == 1){ // if i is equal to 1, output should be slightly different
      console.log(i + " bottles of beer on the wall! " + i + " bottles of beer! Take one down and pass it around. No more bottles of beer on the wall!");
      console.log("---------------------------------------------------------");
    } else { //output should be standard beer song
      console.log(i + " bottles of beer on the wall! " + i + " bottles of beer! Take one down and pass it around. " + (i - 1) + " bottles of beer on the wall!");
    }
  }
}

// PROBLEM 5
//------------------------------------
function fizzBuzz(){
  var setFizz = prompt("Please enter a positive number.");

  // if user input is not a number or less than 0, will alert user that input is invalid and runs entire method again
  if (setFizz <= 0){
    alert("Please enter a valid, even number");
    bottlesOfBeer();
  } else {
    setFizz = parseInt(setFizz);
    alert("Check yo' console, son."); //memo that program outputs for loop results in console
    console.log("START GAME!");
    console.log("---------------------------------------------------------");
  }

  for (var i = 0; i <= setFizz; i++){
    if (i % 3 === 0 && i % 5 === 0){ // if i is divisible by 3 & 5
      console.log("FizzBuzz");
    } else if (i % 5 === 0){ // if i is divisible by 5
      console.log("Buzz");
    } else if (i % 3 === 0){ // if i is divisible by 3
      console.log("Fizz");
    } else { // prints i if none of the aformentioned requirements are met
      console.log(i);
    }
  }
  console.log("---------------------------------------------------------");
}

// PROBLEM 6
// -----------------------------------
function wordReverser(){
  var inputWord = prompt("Input a word to be reversed:");

  // variable stores an alert that splits inputword varibale into an array, runs reverse on all elements in the array, then joins the array into a string.
  var reversedWord = alert(inputWord.split('').reverse().join(''));
}

//PROBLEM 7
//------------------------------------
function driversLicense(){
  //function to determine output based on user's age input
  function checkUserAge(age){

    //if user submits something other than a number
    if (isNaN(age) === true){
      alert("Seriously? " + age + " isn't even a number. Let's try this again.");
      driversLicense();
      //if user submits a negative number (you could combine the two, but I like having different error messages for each situation)
    } else if(age < 0){
      alert("Please enter a valid age.");
      driversLicense();

    //if user input is a valid age
    } else {
        if (age >= 25){
          alert("You have full adult privileges.");
        } else if (age >= 21 && age <= 24){
          alert("You can drink, but you can't rent cars yet.");
        } else if ( age >= 18 && age < 21){
          alert("You can get a license, but you can't drink yet.");
        } else if (age >= 16 && age <= 17){
          alert("You can get a license, but you can't vote yet.");
        } else if (age == 15){
          alert("You can get a learner's permit");
        } else {
          alert("You're not eligible for a license yet");
        }
    }
  }
  //prompt to get user age input
  var userAge = prompt("What is your age?");
  //method to determine program output based on user's age
  checkUserAge(userAge);
}

// PROBLEM 8
//------------------------------------
function wordSorter(){
  var totalWords = Math.floor((Math.random() * 10) + 1);
  var wordCount = 0;
  var wordArray = [];

  while (wordCount <= totalWords){
    var word;
    word = prompt("Enter a word: \n Words remaining: " + ((totalWords - wordCount) + 1));

    //checks to see if user has tried to submit multiple words in one submission or used a non-alpha character
    if (word.match(/\s/g) || /[^a-z]/i.test(word)){
      alert("You can only submit one word at a time. Non-alpha characters are also not allowed. \n Please Try Again.");
    } else {
      wordArray.push(word.toLowerCase()); //removing capital letters as sorting gives priority to strings where first element is capitalized. 
      wordCount++
    }
  }

  alert(wordArray.sort().join(", "))
}

// BONUS PROBLEM 1 & 2
//--------------------------------------
function fahrenheitCelsiusConversions(){
  var userTemp;
  var initialDegrees;
  var isCelsius;

  //checks to see if input is not a number or is undefined.
  function numberInuptCheck(){
    while (isNaN(userTemp) || userTemp === undefined){
      alert("please enter a valid Number");
      userTemp = prompt("What is the temperature outside?");
    } 
      userTemp = parseFloat(userTemp);
      console.log(userTemp)
  }

  //function checks to see if user input is fahrenheit or celsius. Restarts the function if response is anything other than these two things
  function initialDegreesCheck(){
    initialDegrees = prompt("Current Temperature: " + userTemp + "degrees. \n Type 'Fahrenheit' if this temperature is currently measured in degrees fahrenheit. \n Type Celsuis if the temperature is currently measured in degrees celsius." );
    if (initialDegrees.toLowerCase() == "fahrenheit"){
      isCelsius = false;
    } else if (initialDegrees.toLowerCase() == "celsius"){
      isCelsius = true;
    } else {
      alert("Please enter either 'Fahrenheit' or 'Celsius'");
      initialDegreesCheck();
    }
  }

  //function converts degrees to celsius or fahrenheit depending on isCelsius value
  function degreesConversion(){
    var sum;
    //converts to celsius
    if (isCelsius === false){
      sum = (userTemp - 32) / parseFloat(1.8)
      alert("The temperature, converted to celsius, is " + sum);

    //converts to fahrenheit
    } else if (isCelsius === true){
      sum = (userTemp * parseFloat(1.8)) + 32
      alert("The temperature, converted to Fahrenheit, is " + sum);
    
    //safeguard in case other validations have failed
    } else {
      alert("There seems to be an error with my calculations. Please try again.");
      fahrenheitCelsiusConversions();
    }
  }

  //calling functions to run program
  numberInuptCheck()
  initialDegreesCheck()
  degreesConversion()
}
//Bonus Problem 3
//----------------------------
function mySpaceNameGenerator(){
  var userName = prompt("What is your name?");
  
  //function removes spaces from String arguement
  function removeSpaces(str) {
    return str.replace(/ /g,'');
  }

  // function takes str argument, formats it in alternating uppercase/downcase letters and returns the result 
  function mySpaceFormatting(str){
    var myspaceName = [];

    //for loop capitalizes each element with an even index. Lowercases each element with an odd index. Pushes that element into an array.
    for(var i = 0; i < str.length; i ++){
      if(i % 2){
        var letter = str[i].toUpperCase();
        myspaceName.push(letter);
      } else {
        myspaceName.push(str[i].toLowerCase());
      }
    }
    return myspaceName.join('')
  }

  //formats user's input
  // EX: "this" = "ThIs"
  var formattedName = mySpaceFormatting(userName);

  //capitalizes the first letter of each formatted word, then removes whitespaces.
  var finalName = "xX_" + removeSpaces(formattedName.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')) + "_Xx";
  
  //returns formatted MySpace name to user via alert.
  alert("Your MySpace name is: \n" + finalName);
}

//Bonus Problem 4
//----------------------------
function regexZFunction(){
  var userInput = prompt("Quick! Say some words!");
  var userInputz = userInput.replace(/([aeiou])/g, "z"); //regex to find any vowel in the string and replace it with the letter "z"
  alert("Look! I took out all the vowels and replaced them with the letter 'z'! \n" + userInputz + "\n Why did I do this? Unimportant!");
}

//Bonus Problem 5
//-----------------------------
function sortWordArrayByLength(){
  //sets a random number value for the total number of words to be provided by the user
  var totalWords = Math.floor((Math.random() * 10) + 1);
  var wordCount = 0;
  var wordArray = [];

  // while loop goes until wordCount equals the randomly assigned value of totalWords
  while (wordCount <= totalWords){
    var word;
    word = prompt("Enter a word: \n Words remaining: " + ((totalWords - wordCount) + 1));

    //if the user enters multiple words at once or has used , they are prompted to only enter one word at a time. The word count will not increase
    if (word.match(/\s/g) || /[^a-z]/i.test(word)){
      alert("You can only submit one word at a time. Non-Alpha characters are not allowed. Please Try Again.");
    
    // if user provides valid input
    } else {
      wordArray.push(word);
      wordCount++
    }
  }

  //after conditions in while loop are satisified, create new variable that calls a function on wordArray to sort by length
  var sortedByLength = wordArray.sort(function(a, b){  // a = first element. b = second element. 
    return a.length - b.length; // ascending order
  });

  alert(sortedByLength.join(', ')); // returns result as string via alert
}