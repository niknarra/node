const cars = [1,2,3,4,5];

cars.forEach(doubleEmUp);
cars.forEach(showOff);

function showOff(element){
	console.log(element);
	}

function doubleEmUp(element,index,array){
	array[index] = element * 2;
	}

