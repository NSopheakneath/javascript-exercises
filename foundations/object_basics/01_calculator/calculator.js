const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(num=>total+=num);
  return total;
	
};

const multiply = function(arr) {
   let product = 1;
  arr.forEach(num=>product*=num);
  return product;

};

const power = function(base,expo) {
  return base**expo;
	
};

const factorial = function(x) {
  let total=1;
  for (let i=x;i>=1;i--){
    total*=i;
  }
  return total;
	
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
