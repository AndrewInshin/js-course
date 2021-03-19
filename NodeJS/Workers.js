const {
	Worker,
	isMainThread
} = require('worker_threads');

// generate array with random numbers
function randomArray(length, max) {
	return Array.apply(null, Array(length)).map(function() {
		return Math.round(Math.random() * max);
	});
}

if(isMainThread) {
	const input = randomArray(100, 200);
	// run thread and pass info
	const worker = new Worker('./sort.executor.js', { workerData: { value: input } });
	worker.on('message', (result) => {
		console.log(result);
	});
	worker.on('exit', (code) => {
		if (code !== 0)
			throw new Error(`Worker stopped with exit code ${code}`);
		else
			console.log('Worker stopped ' + code);
	});
}
