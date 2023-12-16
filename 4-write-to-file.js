// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const contentToWrite = ("Pehle Bhi main tujhse mila! (Animal- Song by Vishal Mishra");

// Specify the file path
const fileName = 'a.txt';

// Write to the file
fs.writeFile(fileName, contentToWrite, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
  }
  console.log();
});