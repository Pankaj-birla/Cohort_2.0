/*
 * Write a function that halts the JS thread (make it busy wait)  a givenfor number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve)=>{
        setInterval(resolve, milliseconds);
    });
}

module.exports = sleep;
