function hoist() {
	var b;
	a = 20;
	console.log(b);
	b = 100;
}

hoist();
 /*
console.log(a);*/
/*
Доступ как к глобальной переменной вне функции hoist()
Выводит: 20
*/

//Как только b была назначена, она заключена в рамки области видимости функции hoist(). Что означает то, что мы не можем вывести её за рамки функции.
//Вывод: ReferenceError: b is not defined
// Example with let:

c = 1; // initialization.
let c; // Throws ReferenceError: Cannot access 'a' before initialization

console.log(c)

// Example with const:
/*d = 1; // initialization.
const d; // Throws SyntaxError: Missing initializer in const declaration*/
