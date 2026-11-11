const fibonacci = function(x) {
    if (!Number.isInteger(x) || x <= 0 || typeof x === "string"){return 'OOPS';}
    let arr= [1,1];
    for (let i=2;i<x;i++){
       
        arr.push(arr[i-1]+arr[i-2]);
    
    }
    return arr[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
