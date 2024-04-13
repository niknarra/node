function returnSomething(){

return "Something";
}

function higherOrder(func){

return func();

}

console.log(higherOrder(returnSomething));
