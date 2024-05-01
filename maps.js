const cars = [1,2,3,4,5];
const squares = cars.map(square);


function square(element,index,array){
return array[index] = element * 2;
}
function display(arr){
	console.log(arr);
}

cars.forEach(square);
cars.forEach(display);
console.log(squares);
