// Closures in JS often involve 2 functions, an outer function and an inner function

function outerFunc(){
	let count = 0;

return function(){
	count+=1;
	return count;
	}
}

const myCounter = outerFunc();
console.log(myCounter());
console.log(myCounter());
