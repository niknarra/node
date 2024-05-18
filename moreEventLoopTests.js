console.log('1');

setTimeout(function() {
    console.log('2');
    Promise.resolve().then(function() {
        console.log('3');
    });
}, 500);

setTimeout(function() {
    console.log('4');
}, 200);

new Promise(function(resolve, reject) {
    console.log('5');
    resolve();
}).then(function() {
    console.log('6');
});

console.log('7');