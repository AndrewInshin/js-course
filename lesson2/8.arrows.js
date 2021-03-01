

// Traditional Function
function a (a, b){
	return a + b + 100;
}

// Arrow Function
let arrow = (a, b) => a + b + 100;

console.log(arrow(1,2))

let obj = { // does not create a new scope
	i: 10,
	b: () => console.log(this.i, this),
	c: function() {
		console.log(this.i, this);
	}
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


function foo(n) {
	let f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
	return f();
}

foo(3); // 3 + 3 = 6
