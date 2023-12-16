/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// Function to create a Promise that resolves after a specified number of seconds
function wait(n) {
    return new Promise(function(resolve, reject) {
        // Use setTimeout to introduce a delay of n seconds
        setTimeout(function() {
            // Resolve the Promise after the specified time
            resolve();
        }, 1000 * n);
    });
}

// Get the current time in milliseconds as the start time
const startTime = new Date().getTime();

// Call the wait function with an argument of 5 seconds and store the returned Promise in ans
const ans = wait(5);

// Attach a callback function to the Promise using the then method
ans.then(function(resolvedValue) {
    // This function is executed when the Promise is resolved
    // Get the current time in milliseconds as the end time
    const endTime = new Date().getTime();

    // Calculate the time difference between the start and end times
    const difference = endTime - startTime;

    // Return the time difference (Note: This return statement doesn't affect the overall outcome)
    return difference;
});

// Export the wait function as a module
module.exports = wait;
