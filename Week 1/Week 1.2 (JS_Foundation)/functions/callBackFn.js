function calculateArth(a, b, arthimeticFunction){
    const ans = arthimeticFunction(a, b)
    return ans;
}

function sum(a, b){
    return a+b;
}

function minus(a, b){
    return a-b;
}

const value = calculateArth(4,5,minus)
console.log(value);
