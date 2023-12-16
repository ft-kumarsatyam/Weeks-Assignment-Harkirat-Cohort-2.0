/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// Function to create a Promise that resolves after a specified number of milliseconds
function sleep(milliseconds) {
    return new Promise(function (resolve, reject) {
        // Use setTimeout to introduce a delay
        setTimeout(function () {
            // Resolve the Promise after the specified time
            resolve();
        }, milliseconds);
    });
}

// Export the sleep function as a module
module.exports = sleep;
