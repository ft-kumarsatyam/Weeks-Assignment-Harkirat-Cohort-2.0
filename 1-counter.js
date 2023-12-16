//Create a counter in JavaScript

// <!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->


let count = 0;

function incrementCounter() {
  count++;
  console.log('Counter:', count);
}

function decrementCounter() {
  count--;
  console.log('Counter:', count);
}

// Example usage
incrementCounter(); // Counter: 1
incrementCounter(); // Counter: 2
decrementCounter(); // Counter: 1
