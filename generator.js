function* count() {
	yield 1;
	yield 2;
	return 3;
}

const it = count();

//console.log(it);
//console.log(...it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
