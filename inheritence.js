class Car{
	production = true;
	
	drive(){
		console.log(`I'm driving the ${this.name}`);
	}
}

class Porsche extends Car{
	name = "Porsche";
}

const carrera = new Porsche;

carrera.drive();
