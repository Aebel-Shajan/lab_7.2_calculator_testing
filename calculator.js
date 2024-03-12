const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a/b;
};

const modulus = function(a) {
    return Math.abs(a);
};

const even = function(a) {
    return a % 2 == 0; 
};

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
