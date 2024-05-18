let car = "GT3";

let name;

switch(car){
	case "GT3":
		console.log("Porsche guy");
		break;
	default:
		console.log("Not a porsche guy");
}

switch(true){
	case car == "GT3":
		name = "911 GT3";
		break;
	default:
		name = "911";
	}
console.log(name);
