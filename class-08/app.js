let pictureType = prompt('What kinds of pictures do you like to see?');

document.write(paragraphizer(pictureType));

// takes in a string for a type of picture and returns a string that is a paragraph tag to go on the page
function paragraphizer(pic) {
  return '<p>The premier taker of ' + pic + ' pictures.</p>';
}
