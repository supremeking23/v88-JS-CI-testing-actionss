const chai = require("chai");
const expect = chai.expect;
const algoritm = require("./test_cases/algorithm");
const test_algorithm = new algoritm();

// #1
describe("Sum", function () {
	it("Returns the sum of the two numbers passed as its arguments.", function () {
		let num1 = 7;
		let num2 = 3;
		let expected_sum = 10;
		let result = test_algorithm.sum(num1, num2);
		expect(result).to.equal(expected_sum);
	});
});

// #2.1

describe("Celcius to Fahrenheit", function () {
	it("Returns the equivalent temperature as expressed in Fahrenheit degrees.", function () {
		let degree_celcius = 0;
		let expected_fahrenheit = 32;
		let result = test_algorithm.celciusToFahrenheit(degree_celcius);
		expect(result).to.equal(expected_fahrenheit);
	});
});

// 2.2
describe("Celcius to Fahrenheit", function () {
	it("Returns the equivalent temperature as expressed in Fahrenheit degrees.", function () {
		let degree_celcius = 100;
		let expected_fahrenheit = 212;
		let result = test_algorithm.celciusToFahrenheit(degree_celcius);
		expect(result).to.equal(expected_fahrenheit);
	});
});

// #3
describe("Double array values", function () {
	it("Return a new array where each value in the original has been doubled.", function () {
		let arr = [2, 4, 6];
		let expected_arr = [4, 8, 12];
		let result = test_algorithm.double(arr);
		expect(result).deep.to.equal(expected_arr);
	});
});

// #4

describe("Greater than Y", function () {
	it("Count and return the number of array values greater than Y", function () {
		let arr = [2, 4, 6];
		let y = 3;
		let exptected = 2;
		let result = test_algorithm.returnArrayCountGreaterThanY(arr, y);
		expect(result).deep.to.equal(exptected);
	});
});

// #7
describe("Sigma", function () {
	it("Returns the sum of all positive integers up to number (inclusive)", function () {
		let num = 7;
		let expected_sigma = 28;
		let result = test_algorithm.sigma(num);
		expect(result).to.equal(expected_sigma);
	});
});

// #8
describe("Factorial", function () {
	it("Returns the product (multiplication) of all positive integers from 1 up to number (inclusive", function () {
		let num = 8;
		let expected_factorial = 40320;
		let result = test_algorithm.factorial(num);
		expect(result).to.equal(expected_factorial);
	});
});

// #9
describe("Swap toward center", function () {
	it("Given array, swap first and last, second and second-to-last, third and third-to- last, etc.", function () {
		let arr = [true, 42, "Ada", 2, "pizza"];
		let expected_arr_swapped = ["pizza", 2, "Ada", 42, true];
		let result = test_algorithm.swapTowardCenter(arr);
		expect(result).deep.to.equal(expected_arr_swapped);
	});
});

// #10
describe("Create threes Fives", function () {
	it(`Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum.`, function () {
		let num = 10;
		let expected_result = 22;
		let result = test_algorithm.threesFives(num);
		expect(result).to.equal(expected_result);
	});
});

//
describe("Create threes Fives", function () {
	it(`Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit`, function () {
		let num = 928;
		let expected_result = 1;
		let result = test_algorithm.sumToOne(num);
		expect(result).to.equal(expected_result);
	});
});
