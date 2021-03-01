let o = {
	a: 2,
	m: function() {
		return this.a + 1;
	}
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

let p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5


function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"


