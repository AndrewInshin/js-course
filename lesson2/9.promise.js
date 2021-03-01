let promise1 = Promise.resolve('foo')
promise1
	.then(value => { return value + ' and bar'; })
	.then(value => { return value + ' and bar again'; })
	.then(value => { return value + ' and again'; })
	.then(value => { return value + ' and again'; })
	.then(value => { console.log(value) })
	.catch(err => { console.log(err) });
