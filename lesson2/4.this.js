'use strict';

const test = {
	prop: 42,
	func: function() {
		return this.prop;
	},
	multiFunc: function(arg) {
		return this.prop * arg;
	},
	nestedObject : {
		another_prop: 12,
		func: function() {
			return this.another_prop;
		},
	}
};

function func () {
	return this.prop;
}

console.log(func())
/*console.log(test.func.apply({
	prop: 24
}))

let chainedFunc = test.func.bind({
	prop: 38
})
console.log(chainedFunc())

let arr = new Array(6)

arr.splice();

let collection = [...htmlCollection]*/
/*
console.log(test.multiFunc.call({
	prop: 24
}, 12))*/
