class Algorithm {
	constructor() {}
	sum(num1, num2) {
		return num1 + num2;
	}

	celciusToFahrenheit(cDegress) {
		return cDegress * (9 / 5) + 32;
	}

	double(arr) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i] * 2;
		}

		return arr;
	}

	returnArrayCountGreaterThanY(arr, y) {
		let numberOfGreater = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > y) {
				numberOfGreater++;
			}
		}

		return numberOfGreater;
	}

	sigma(num) {
		let sum = 0;
		for (let i = 0; num >= i; i++) {
			sum += i;
		}

		return sum;
	}

	factorial(num) {
		let product = 1;
		for (let i = 1; num >= i; i++) {
			product *= i;
		}

		return product;
	}

	swapTowardCenter(arr) {
		return arr.reverse();
	}

	threesFives(num) {
		let sum = 0;
		for (let i = 1; num >= i; i++) {
			if (i % 3 != 0 && i % 5 != 0) sum += i;
		}
		return sum;
	}

	sumToOne(num) {
		return num % 9 || 9;
	}
}

module.exports = Algorithm;
