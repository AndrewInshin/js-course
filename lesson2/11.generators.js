//Iterators
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
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true


//Generators

function* infinite() {
	let index = 0;

	while (true) {
		yield index++;
	}
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
