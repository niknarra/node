class Car{
	static salesCount=0;

	constructor(make,model){
		this.make=make,
		this.model=model,
		Car.salesCount++
		}
		
	displayInfo(){
		return "The make is ${this.make}";
	}

	static getSales(){
		return Car.salesCount;
	}
}

const car1 = new Car("Porsche","911");

console.log(Car.salesCount);
