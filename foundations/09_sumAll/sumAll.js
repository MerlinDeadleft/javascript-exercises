const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if(a > b) {
        let c = a;
        a = b;
        b = c;
    }

    let result = 0;
    for(let i = a; i <= b; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
