
/*//Iterators
function makeIterator(array){
	let nextIndex = 0;

	return {
		next: function(){
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false} :
				{done: true};
		}
	}
}



let it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().done);
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true*/


//Generators

/*function* infinite(arr) {
	let index = 0;

	while (true) {
		yield arr[index++] * 2;
	}
}

let arr = [10,23,43,23]

const generator = infinite(arr); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 0
console.log(generator.next().value); // 0
console.log(generator.next().value); // 0*/
/*console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2
console.log(generator.next().value); // 2*/


/*

let multiArr = arr.map(i => i*2)

console.log(arr, multiArr)*/
