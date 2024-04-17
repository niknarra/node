class Cars{
	constructor(model, price){
		this.model=model,
		this.price=price
		}
	displayInfo(){
		console.log(`You selected the ${this.model} for ${this.price}`);
		}
	calculateTax(){
		let tax = this.price*0.0543;
		console.log(`The total price will be ${tax+this.price}`);
		}
}
const car1 = new Cars("Porsche",300000);
car1.displayInfo();
car1.calculateTax();

