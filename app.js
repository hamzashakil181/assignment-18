// assignment 18

// Chapter 31 - 34 (Date & Time) 

// 1. Code a statement that creates a new Date object and
// assigns it to dObj, which hasn&#39;t been declared beforehand.

// dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it
// to a string, and assigns the string to dStr, which hasn&#39;t been
// declared beforehand.

// dStr = new Date().toString();

// 3. Code a statement that extracts the day of the week from a
// Date object represented by d and assigns it to day, which
// hasn&#39;t been declared beforehand.

// day = d.getDay();

// 4. The day has been extracted from the Date object and

// assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

// alert(dayNames[d]);

// 5. Extract all parts of the Date and Time and assign it to the
// variable which has not been declared beforehand.

// dateTimeParts = {
//     year: new Date().getFullYear(),
//     month: new Date().getMonth() + 1, // Months are zero-based
//     day: new Date().getDate(),
//     hours: new Date().getHours(),
//     minutes: new Date().getMinutes(),
//     seconds: new Date().getSeconds(),
//     milliseconds: new Date().getMilliseconds(),
//     dayOfWeek: new Date().getDay()
// };

// 6. Code a statement that creates a Date object for the last day
// of the last month of 2020 and assigns it to later, which
// hasn&#39;t been declared beforehand.

// later = new Date(2020, 11, 31); // December is month 11 (0-based index)

// 7.Create a Date object for the second day of the second
// month of 1992 and assign it to a variable that hasn&#39;t been
// declared beforehand.

// dateVariable = new Date(1992, 1, 2); // February is month 1 (0-based index)

// 8. Code a single statement that displays in an alert the
// milliseconds that elapsed between the reference date and
// the beginning of 1980.

// alert(referenceDate - new Date(1980, 0, 1)); // January 1, 1980

// 9. How do you change the year of a date in JavaScript?

// var date = new Date(); // Current date
// date.setFullYear(2025, 5, 15); // Change to June 15, 2025

// 10. Write a JavaScript function to change the month of a given

// date to January.

// function changeMonthToJanuary(date) {
//     date.setMonth(0); // 0 represents January
//     return date;
// }

// // Example usage:
// var myDate = new Date('2023-10-14'); // Original date
// var updatedDate = changeMonthToJanuary(myDate);
// console.log(updatedDate); // Outputs the date with the month set to January

// 11. What is the method to change the day of the week for a specific date in JavaScript?

// var date = new Date('2023-10-14'); // Original date
// date.setDate(date.getDate() + 3); // Change the day to three days later
// console.log(date); // Outputs the updated date

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

// function changeMinutes(date) {
//     var newMinutes = parseInt(prompt("Enter the new minutes value:"));

//     if (!isNaN(newMinutes)) {
//         date.setMinutes(newMinutes); // Set the new minutes
//     } else {
//         console.log("Invalid input. Please enter a number.");
//     }

//     return date;
// }

// var myDate = new Date(); // Current date and time
// var updatedDate = changeMinutes(myDate);
// console.log(updatedDate); 

// 13. Write a JavaScript function to add a specific number of hours to a given time.

// function addHours(date, hours) {
//     date.setHours(date.getHours() + hours);
//     return date;
// }


// var myDate = new Date(); 
// var hoursToAdd = 5; 
// var updatedDate = addHours(myDate, hoursToAdd);
// console.log(updatedDate); 

// 14. You have to create a age calculator in JavaScript.

// function calculateAge(birthDate) {
//     var today = new Date();
//     var age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

// // Example usage:
// var birthDateInput = prompt("Enter your birth date (YYYY-MM-DD):");
// var birthDate = new Date(birthDateInput);
// var age = calculateAge(birthDate);
// alert(Your age is: ${age} years old.);



// Chapter 35 - 37 (Functions) 

// 1. Code the first line of a function displayAlert.

// function displayAlert() {
//     alert("This is an alert message!");
// }

// 2.	Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand. 

// function askName() {
//     userName = prompt("Enter name"); // Assign the user input to userName
// }
// askName();
// console.log(userName); // To check the entered name

// 3.code a function that calls 2 other functions.

// function functionOne() {
//     console.log("Function One called.");
// }

// function functionTwo() {
//     console.log("Function Two called.");
// }

// function callBothFunctions() {
//     functionOne(); // Call the first function
//     functionTwo(); // Call the second function
// }

// // Example usage:
// callBothFunctions();


// 4. Code a function that displays a prompt, &quot;Enter name&quot; and
// then displays the name in an alert. Call the function.

// function askAndDisplayName() {
//     var userName = prompt("Enter name"); // Prompt the user for their name
//     alert("Hello, " + userName + "!"); // Display the name in an alert
// }

// // Call the function
// askAndDisplayName();

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that
// takes a variable, a string, and a number as arguments.

// var myVariable = "X";
// var myString = "hello";
// var myNumber = 42;

// var result = concat(myVariable, myString, myNumber);

// 6.Code a function that has 2 parameters. Concatenate them
// and assign the result to a variable that hasn&#39;t been declared
// beforehand.

// function concatenateAndAssign(param1, param2) {
//     result = param1 + param2; // Assign the concatenated result to result
// }

// // Example usage:
// concatenateAndAssign("Hello, ", "world!");
// console.log(result); // Outputs: "Hello, world!"


// 7.Code a function that has three parameters. Multiply them
// and assign them to a variable that hasn&#39;t been declared yet.

// function multiplyAndAssign(param1, param2, param3) {
//     result = param1 * param2 * param3; // Assign the multiplied result to result
// }

// // Example usage:
// multiplyAndAssign(2, 3, 4);
// console.log(result); // Outputs: 24

// 8.Write a JavaScript function that takes an array of numbers
// as input and returns the average of those numbers.

// function calculateAverage(numbers) {
//     if (numbers.length === 0) return 0; // Handle empty array

//     var sum = 0;

//     for (let num of numbers) {
//         sum += num; // Accumulate the sum
//     }

//     return sum / numbers.length; // Return the average
// }

// // Example usage:
// var numbersArray = [10, 20, 30, 40];
// var average = calculateAverage(numbersArray);
// console.log(average); // Outputs: 25


// 9.Write a JavaScript function that takes two parameters and returns their sum.

// function addNumbers(num1, num2) {
//     return num1 + num2; // Return the sum of the two parameters
// }

// // Example usage:
// var sum = addNumbers(5, 10);
// console.log(sum); // Outputs: 15

// 10.Write a JavaScript function that takes an array of numbers
// as input and returns the average of those numbers.

// function calculateAverage(numbers) {
//     if (numbers.length === 0) return 0; // Handle empty array

//     var sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // Calculate sum
//     return sum / numbers.length; // Return average
// }

// // Example usage:
// var numbersArray = [10, 20, 30, 40];
// var average = calculateAverage(numbersArray);
// console.log(average); // Outputs: 25


// 11.you have to capture the returned value from a function and

// store it in a variable?

// function multiply(a, b) {
//     return a * b; // Return the product of the two parameters
// }

// // Capture the returned value in a variable
// var product = multiply(4, 5);

// console.log(product); // Outputs: 20


// 12.Write a function which tells letter counts of (word).

// function letterCount(word) {
//     var counts = {}; // Object to store letter counts

//     for (let letter of word) {
//         letter = letter.toLowerCase(); // Convert to lowercase for case-insensitivity
//         if (counts[letter]) {
//             counts[letter]++; // Increment count if letter already exists
//         } else {
//             counts[letter] = 1; // Initialize count if it's the first occurrence
//         }
//     }

//     return counts; // Return the counts object
// }

// // Example usage:
// var word = "HelloWorld";
// var result = letterCount(word);
// console.log(result); // Outputs: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// 13.Write a function to set (year) in date object.

// function setYearInDate(date, year) {
//     date.setFullYear(year); // Set the year in the provided Date object
//     return date; // Return the updated Date object
// }

// // Example usage:
// var myDate = new Date(); // Current date
// console.log("Original Date:", myDate);

// var updatedDate = setYearInDate(myDate, 2025); // Set year to 2025
// console.log("Updated Date:", updatedDate);


// 14.Write a function which tells the age of a person who Born on (dateOfBirth)

// function calculateAge(dateOfBirth) {
//     var today = new Date(); // Get the current date
//     var age = today.getFullYear() - dateOfBirth.getFullYear(); // Calculate initial age
//     var monthDifference = today.getMonth() - dateOfBirth.getMonth(); // Get month difference

//     // Adjust age if the birthday hasn't occurred yet this year
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
//         age--;
//     }

//     return age; // Return the calculated age
// }

// // Example usage:
// var birthDate = new Date('1990-05-15'); // Example date of birth
// var age = calculateAge(birthDate);
// console.log(Age: ${age}); // Outputs the age


// 15.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false 

// function isWordPresent(word) {
//     var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//     return namesArray.includes(word); // Return true if the word is in the array, otherwise false
// }


// var result1 = isWordPresent('hassan'); 
// var result2 = isWordPresent('john');   
// console.log(result1); 
// console.log(result2); 


// 16.	Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10) 

// function repeatLetter(letter) {
//     return letter.repeat(10); 
// }

// var repeated = repeatLetter("a");
// console.log(repeated); 



// 17.	write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse() 

// function reverseArray(arr) {
//     return arr.reverse(); 
// }

// var originalArray = ['a', 'b', 'c', 'd', 'e'];
// var reversedArray = reverseArray(originalArray);
// console.log(reversedArray); 

// Chapter 38 (Local vs. Global Variables) 

// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.

// function calculateSquare(number) {
//     var square = number * number; 
//     return square; 
// }

// var result = calculateSquare(5); 
// console.log(result);


// 2. How can you access a global variable inside a function in
// JavaScript?

// var globalVariable = "I am a global variable";

// function accessGlobal() {
//     console.log(globalVariable); 
// }

// accessGlobal(); 


// Chapter 39, 40 (Switch Statements) 

// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.


// var day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }



// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

// function checkCity() {
//     var cityName = prompt("Enter the city name:"); 

//     switch (cityName.toLowerCase()) { 
//         case 'new york':
//             alert("Welcome to New York!");
//             break;
//         case 'los angeles':
//             alert("Welcome to Los Angeles!");
//             break;
//         case 'chicago':
//             alert("Welcome to Chicago!");
//             break;
//         case 'miami':
//             alert("Welcome to Miami!");
//             break;
//         default:
//             alert("City not recognized. Please try again.");
//     }
// }

// // Call the function
// checkCity();
