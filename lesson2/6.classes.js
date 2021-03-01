
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	// Getter
	get area() {
		return this.calcArea();
	}
	// Method
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name); // call the super class constructor and pass in the name parameter
	}

	speak() {
		console.log(`${this.name} barks.`);
	}
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
