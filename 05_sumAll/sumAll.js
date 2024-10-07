const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || !( Number.isInteger(num1)) || !(Number.isInteger(num2) )) {
        return "ERROR"
    } else{
        if (num1>num2) {
            return num1*(num1+1)/2 -num2*(num2+1)/2 +num2
        } else {
            return num2*(num2+1)/2 -num1*(num1+1)/2 + num1
        }
         
    }

};

// Do not edit below this line
module.exports = sumAll;
