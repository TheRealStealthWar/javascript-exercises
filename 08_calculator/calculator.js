const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  })
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach((num) => {
    product *= num;
  })
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let product = 1;
  while (num > 0) {
    product *= num;
    num -= 1;
  }
  return product
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
