const cars = ["porsche", "bmw", "range rover", "GT3"];

const porsches = cars.filter(onlyPorsches);

function onlyPorsches(element){
	return element === "GT3";
	}

console.log(porsches);
