class Car{

	constructor(name,year){
		this.name=name,
		this.year=year
		}
	set name(newName){
		if(newName==="string"){
			this._Name = newName;
		}else{
			console.error("check");
	}
	}

	get name(){
		return this._Name;
	}

}

const nissan = new Car(420,2020);
console.log(nissan.name);
