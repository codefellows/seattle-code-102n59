let pictureType = prompt('What kinds of pictures do you like to see?');

document.write(paragraphizer(pictureType));

// takes in a string for a type of picture and returns a string that is a paragraph tag to go on the page
function paragraphizer(pic) {
  return '<p>The premier taker of ' + pic + ' pictures.</p>';
}

function prettyPicture() {
  return '<img class="profile" src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" />';
}

// ask the user how many pictures they want to see
let numPictures = prompt('How many photographers would you like to see?');
// as long as they enter a bad response, keep prompting them
while (isNaN(numPictures) || numPictures > 10 || numPictures < 1) {
  numPictures = prompt('Try again. Please enter a number between 1 and 10.');
}
// use their response to show that many pictures
for (let i = 0; i < numPictures; i = i + 1) {
  document.write(prettyPicture());
}

