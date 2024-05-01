let cars = [1,2,3,4,5];

cars = cars.reduce(sum);

function sum(accumulator,result){
	return accumulator+result;
	}

console.log(cars);
