// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

// Function to clean extra spaces in a string
function cleanSpaces(input) {
  // Replace multiple spaces with a single space using a regular expression
  return input.replace(/\s+/g, ' ').trim();
}

// Function to read a file, clean extra spaces, and write it back to the same file
function cleanFile(fileName) {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    } else {
      // Clean extra spaces in the content
      const cleanedContent = cleanSpaces(data);

      // Write the cleaned content back to the same file
      fs.writeFile(fileName, cleanedContent, 'utf-8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing to file:', writeErr);
        } else {
          console.log('File has been cleaned and written successfully.');
        }
      });
    }
  });
}

// Specify the file path
const fileName = 'example.txt';

// Clean the file
cleanFile(fileName);
