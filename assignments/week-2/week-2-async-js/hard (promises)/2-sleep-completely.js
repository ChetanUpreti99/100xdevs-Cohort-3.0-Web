/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let start = Date.now();
    while (true) {
        let now = Date.now();
        if ((now - start) >= milliseconds) {
            break;
        }
    }
    return Promise.resolve();
}

module.exports = sleep;
