class Car{
	make = "Porsche";
	static numOfCars = 0;
	
	constructor(name, year){
		this.name=name,
		this.year=year,
		Car.numOfCars++
		}
	
	choice(name,year){
		console.log(`You chose the ${year} ${name}`);
	} 
}

class Car1 extends Car{
	
	constructor(name,year){
	super(name, year);
	}
	selection(){
	super.choice(this.name,this.year);
	}
}

const carrera = new Car1("Carrera",2024);

carrera.selection();
console.log(Car1.numOfCars);	
