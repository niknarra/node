function getCar(callback, make, model){
		let yourCar = make+model;
		callback(yourCar);
		}

function displayCar(details){
	console.log(details);
	}

getCar(displayCar, "Porsche", "GT3");	
