class Car{

	constructor(make,model,year){
		this.make=make,
		this.model=model,
		this.year=year
		}

	drive(){
		console.log(`You drive a ${this.year} ${this.make} ${this.model}`);
	}
	
	set make(newMake){
		if(newMake==="string"){
			this._Make = newMake;
		}
		else{
			console.error("Check your name");
		}
	}
	
	set year(newYear){
		if(newYear==="number"){
			this._Year=newYear;
		}
		else{
			console.error("Check your year");
		}
	}


	get make(){
		return this._make;	
	}

	get makeYear(){
		return this._Make+" "+this._Year;
	}
}

const carrera = new Car("Porsche","Carrera",2024);

carrera.drive();
console.log(carrera.makeYear);
