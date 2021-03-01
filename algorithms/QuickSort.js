function quickSortIterative(arr) {
	// Creating an array that we'll use as a stack, using the push() and pop() functions
	stack = [];

	// Adding the entire initial array as an "unsorted subarray"
	stack.push(0);
	stack.push(arr.length - 1);

	// There isn't an explicit peek() function
	// The loop repeats as long as we have unsorted subarrays
	while(stack[stack.length - 1] >= 0){

		// Extracting the top unsorted subarray
		end = stack.pop();
		start = stack.pop();

		pivotIndex = partition(arr, start, end);

		// If there are unsorted elements to the "left" of the pivot,
		// we add that subarray to the stack so we can sort it later
		if (pivotIndex - 1 > start){
			stack.push(start);
			stack.push(pivotIndex - 1);
		}

		// If there are unsorted elements to the "right" of the pivot,
		// we add that subarray to the stack so we can sort it later
		if (pivotIndex + 1 < end){
			stack.push(pivotIndex + 1);
			stack.push(end);
		}
	}
}


[2,5,3,3,6,7,4,2,34,76,8,5,3,2,56,34]

,5,2,4,6,7


2,3,3
