
/*const bar = () => console.log(1);
const baz = () => console.log(3);

const foo = () => {
	console.log(2);
	setTimeout(bar, 0);
	Promise.resolve().then(() => console.log(4));
	baz();
};

foo();*/




/*var o = {
	x: 10,
	foo() {
		for (var i = 0; i < 10; i++) {
			setTimeout(function () {
				console.log(i + this.x);
			}, 0);
		}
	}
}

o.foo();*/


/*const a = () => setTimeout(() => {
	console.log(123)
	a()
}, 1000)

a()

const b = () => new Promise((resolve, reject) => {
	console.log(321)
	b()
})

b()*/

/*function sample (a, b, ...c){
	console.log(a)
	console.log(b)
	console.log(c)
}

sample (1,2,3,4,5,6,7,8,9,10,11,12)*/

/*const a = {
	id: 5,
	name: 'same',
	title: 'smth',
	item :{
		name: 'blah',
		id: 2
	}
}

const b = {...a, item: {...a.item, name: 'someName'}}

console.log(a, b)*/
