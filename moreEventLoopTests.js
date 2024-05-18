console.log('A');

setTimeout(function() {
    console.log('B');
}, 1000);

setTimeout(function() {
    console.log('C');
}, 0);

new Promise(function(resolve, reject) {
    console.log('D');
    resolve();
}).then(function() {
    console.log('E');
}).finally(function() {
    console.log('F');
});

console.log('G');

