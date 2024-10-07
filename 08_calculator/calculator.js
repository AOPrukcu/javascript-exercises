const add = function(...arg) {
	let sum = 0;
  arg.forEach(element => {
    sum +=element
    
  })
  return sum ;;
};

const subtract = function(...arg) {
  let result = 0;
  arg.forEach(element => {
    result -=element
    
  })
  result += arg[0]*2
 
  return result ;;
	
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum +=element
    
  })
  return sum ;;
	
};

const multiply = function(array) {
  let sum = 1;
  array.forEach(element => {
    sum *=element
    
  })
  return sum ;;

};

const power = function(num1,num2) {
  return num1**num2
	
};

const factorial = function(num) {
  let element = 1;
  if (num ==0) {
    return 1 ;
  }
  for (let index = 1; index <= num; index++) {
     element *= index;
    
  }
  return element

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
