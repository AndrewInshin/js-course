/*var a = 8;
function myFunction() {

	function myNestedFunction() {
		console.log(a)
		return a;
	}
	myNestedFunction()
}






myFunction()*/


let makeCounter = function() {
	let customCounter = 0;
	function changeBy(val) {
		customCounter += val;
	}
	return {
		increment: function() {
			changeBy(1);
		},

		decrement: function() {
			changeBy(-1);
		},

		value: function() {
			return customCounter;
		}
	}
};


let counter1 = makeCounter();
let counter2 = makeCounter();

counter1.increment()
counter1.increment()
counter2.increment()
console.log(counter1.value())

function a(){
	function b(){
		counter1.increment()
		counter1.increment()
		console.log(counter1.value())
		console.log(counter2.value())
	}
	b()
}
a()

/*console.log(counter1.value());  // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.*!/*/
