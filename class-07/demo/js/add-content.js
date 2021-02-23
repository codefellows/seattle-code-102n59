// let today = new Date();
let hourNow = prompt('What time is it, friend? 0-23'); // declaring the hourNow variable and assigning it the value that the user typed in response to a prompt
let greeting; // declaring the greeting variable

// if the number the user entered is between 18 and 24, set the value of the greeting variable to be Good evening, Class!
if (hourNow >= 18 && hourNow < 24) {
  greeting = 'Good evening, Class!';
} else if (hourNow >= 12 && hourNow < 24) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Good morning!';
} else {
  greeting = 'Something went wrong!';
}

document.write(greeting);
// taking the value of the variable greeting and
// putting it on the page itself

// () parentheses
// {} curly braces/curly brackets
// [] square brackets
// <> angle brackets
