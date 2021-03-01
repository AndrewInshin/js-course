
const bar = () => console.log(1);
const baz = () => console.log(3);

const foo = () => {
	console.log(2);
	setTimeout(bar, 0);
	Promise.resolve().then(() => console.log(4));
	baz();
};

foo();


var o = {
	x: 10,
	foo() {
		for (var i = 0; i < 10; i++) {
			setTimeout(function () {
				console.log(i + this.x);
			}, 0);
		}
	}
}

o.foo();
