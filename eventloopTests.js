console.log('1');

setTimeout(() => {
    console.log('2');
    Promise.resolve().then(() => {
        console.log('3');
    });
}, 0);

new Promise((resolve, reject) => {
    console.log('4');
    resolve();
})
.then(() => {
    console.log('5');
});

setTimeout(() => {
    console.log('6');
}, 0);

console.log('7');

