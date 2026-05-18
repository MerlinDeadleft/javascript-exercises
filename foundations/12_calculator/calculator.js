const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
    if(numbers.length === 0) {
        return 0;
    }
    
	return numbers.reduce((sum, item) => sum + item);
};

const multiply = function(numbers) {
    if(numbers.length === 0) {
        return 0;
    }
    
    return numbers.reduce((sum, item) => sum * item);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
    let result = 1;
	for(let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
