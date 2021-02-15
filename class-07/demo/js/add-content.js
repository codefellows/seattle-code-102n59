
function createGreeting() {
  let hourNow = prompt('What\'s the hour?');
  let greeting;
  
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  
  return '<h3>'+ greeting + '</h3>';
}

// NOTE: There are 2 ways to define a function...
let showOrder = function() {
  let order = prompt('What would you like to order?');
  let item; 

  if (order === 'house') {
    item = '<img src="images/house.png" >';
  } else if (order === 'hotel') {
    item = '<img src="images/hotel.png" >';
  } else {
    item = '<strong>No items ordered</strong>';
  }

  return item;
}
