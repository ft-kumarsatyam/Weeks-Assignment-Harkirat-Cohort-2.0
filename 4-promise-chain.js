/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


// Function to create a Promise that resolves after a specified number of seconds
function wait(n) {
    return new Promise((resolve) => {
        // Use setTimeout to introduce a delay of n seconds
        setTimeout(() => {
            // Resolve the Promise with a message indicating the resolution time
            resolve(`I am resolved in ${n} seconds!!!`);
        }, n * 1000);
    });
}

// Wrapper function for wait with a specific duration
function waitWithDuration(duration) {
    return wait(duration);
}

// Function to calculate the total time it takes for three promises to resolve sequentially
function calculateTime(t1,t2,t3) {
    // Record the time before initializing the promises
    const beforeInitializationTime = new Date().getTime();

    // Return a new Promise to encapsulate the sequential execution of promises
    return new Promise((resolve, reject) => {
        // Execute promises sequentially
        waitWithDuration(t1)
            .then(() => waitWithDuration(t2))
            .then(() => waitWithDuration(t3))
            .then(() => {
                // Record the time after the completion of all promises
                const afterCompletionOfPromise = new Date().getTime();

                // Calculate the time difference and resolve the total time
                const totalTime = afterCompletionOfPromise - beforeInitializationTime;
                resolve(totalTime);
            })
            .catch((error) => {
                // Handle any errors during promise execution
                reject(error);
            });
    });
}

// Export the calculateTime function as a module
module.exports = calculateTime;
