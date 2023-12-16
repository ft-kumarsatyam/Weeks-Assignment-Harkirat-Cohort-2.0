// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Function to read the contents of a file and print it to the console
function readFile(filename) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error file:', err);
    } else {
      console.log('File info:', data);
    }
  });
}

// File to be read
const filename = 'b.txt';

// Read the file and print its contents
readFile(filename);

// Simulate an expensive operation (e.g., a loop) below the file read
const start = Date.now();

// Expensive operation: Simulating a time-consuming loop
for (let i = 0; i < 1000000000; i++) {
  // This loop will take some time to execute
}

const end = Date.now();

console.log('Expensive operation took:', end - start, 'milliseconds');
