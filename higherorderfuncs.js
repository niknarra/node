function returnSomething(){

return function(){ 
return "Something";
}
}

function higherOrder(func){

return func();

}

let a=returnSomething();
console.log(a());

//console.log(higherOrder(returnSomething()()));
