
/*
// Traditional Function
function a (a, b){
	return a + b + 100;
}

// Arrow Function
let arrow = (a, b) => a + b + 100;

console.log(arrow(1,2))*/

/*let obj = { // does not create a new scope
	i: 10,

	c: function(a) {
		console.log(arguments)
		let b = (a) => console.log(arguments)
		b('sdfsdfsd')
	}
}

obj.c('arg'); // prints 10, Object {...}*/


/*function foo(n) {
	let f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
	return f();
}

foo(3); // 3 + 3 = 6*/
