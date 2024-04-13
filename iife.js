(function(){
console.log("Hello IIFE");
})();

(nameIife = function(name='nikhil'){
console.log(`Hello ${name}`);
})();

nameIife('narra');

var a = 10;

{
let a = 5;
console.log(a);
}

console.log(a);
