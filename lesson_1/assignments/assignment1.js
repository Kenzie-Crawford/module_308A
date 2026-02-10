function trampoline(fn) {
    let result = fn();
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

function countUp(n) {
    if (n === 0) return "Done!"; 
        
     console.log(n);
    return function () {
        return countUp(n - 1);
    }
}
const result = trampoline(() => countUp(50000));
console.log('No stack overflow!', result);

