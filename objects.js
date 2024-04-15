const obj={
	name:"Diamond",
	age:23,
	sayMyName : function(){
		console.log(`You are now talking to the ${this.name}`)},
}

obj.sayMyName();

//We cannot use this keyword with arrow functions.
