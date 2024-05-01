console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    setTimeout(() => {
        console.log('Timeout 2');
    }, 0);
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
    setImmediate(() => {
        console.log('Immediate 2');
    });
});

process.nextTick(() => {
    console.log('Next Tick 1');
    process.nextTick(() => {
        console.log('Next Tick 2');
    });
});

new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
})
.then(() => {
    console.log('Then 1');
});

console.log('End');

