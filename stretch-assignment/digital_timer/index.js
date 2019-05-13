// Todos

// Counts up to 10 seconds
// Increments every 10 ms
// Has digits change to red when it gets to 10 seconds
// Should not count past 10 seconds

// Update the count down every 10ms second
const counter = function() {
	let counter = 0;
	counter++;

	return () => {
		return counter++;
	};
};

console.log(setInterval(counter, 10));
