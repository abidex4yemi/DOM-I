// Todos

// Counts up to 10 seconds
// Increments every 10 ms
// Has digits change to red when it gets to 10 seconds
// Should not count past 10 seconds

// Update the count down every 10ms second
const msTens = document.querySelector('#msTens');
msTens.textContent = 0;

const timer = () => {
	let time = 0;
	let hundredSeconds = 0;
	let secondsOne = 0;
	let secondTen = 0;

	const interval = setInterval(() => {
		time += 10;

		if (time === 100) {
			hundredSeconds++;
			time = 0;
		}

		if (hundredSeconds === 10) {
			secondsOne++;
			hundredSeconds = 0;
		}

		if (secondsOne === 10) {
			secondTen++;
			secondsOne = 0;
		}

		if (secondTen) {
			clearInterval(interval);
			document.querySelectorAll('.digit').forEach(element => {
				element.style.color = 'red';
			});
		}

		document.querySelector('#msHundreds').textContent = hundredSeconds;
		document.querySelector('#secondOnes').textContent = secondsOne;
		document.querySelector('#secondTens').textContent = secondTen;
	}, 10);
};

timer();
