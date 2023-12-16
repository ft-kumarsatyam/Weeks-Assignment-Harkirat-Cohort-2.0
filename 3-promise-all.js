/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Function to create a Promise that resolves after a specified number of seconds
function wait(t) {
    return new Promise((resolve) => {
        // Use setTimeout to introduce a delay of t seconds
        setTimeout(() => {
            // Resolve the Promise with a message indicating the resolution time
            resolve(`I am resolved in ${t} second(s)!!!`);
        }, t * 1000);
    });
}

// Function to calculate the total time it takes for multiple promises to resolve
function calculateTime(t1, t2, t3) {
    // Record the time before initializing the promises
    const beforeInitializationTime = new Date().getTime();

    // Use Promise.all to wait for all promises to resolve
    return Promise.all([wait(t1), wait(t2), wait(t3)])
        .then(() => {
            // Record the time after the completion of all promises
            const afterCompletionOfPromise = new Date().getTime();

            // Calculate the time difference
            const difference = afterCompletionOfPromise - beforeInitializationTime;

            // Resolve the total time difference as the result of the promise
            return difference;
        })
        .catch((error) => {
            // Handle any errors during promise execution
            throw error;
        });
}

// Export the calculateTime function as a module
module.exports = calculateTime;
