// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

function incrementCounter() {
  count++;
  console.log('Counter:', count);
}

function decrementCounter() {
  count--;
  console.log('Counter:', count);
}

// Increment the counter every second
const intervalId = setInterval(incrementCounter, 1000);

// Example usage
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after 3 seconds
}, 2000);







































































// (Hint: setTimeout)