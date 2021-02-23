// let today = new Date();
let hourNow = prompt('What time is it, friend? 0-23'); // declaring the hourNow variable and assigning it the value that the user typed in response to a prompt

function getGreeting(hourNow) {
  if (hourNow >= 18 && hourNow < 24) {
    return 'Good evening, Class!';
  } else if (hourNow >= 12 && hourNow < 24) {
    return 'Good afternoon, Class!';
  } else if (hourNow >= 0 && hourNow < 24) {
    return 'Good morning!';
  } else {
    return 'Something went wrong!';
  }
}

let greeting = getGreeting(hourNow);
document.write(greeting);

// taking the value of the variable greeting and
// putting it on the page itself

// () parentheses
// {} curly braces/curly brackets
// [] square brackets
// <> angle brackets
