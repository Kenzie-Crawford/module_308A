function trampoline(fn) {
    let result = fn();
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

function countUp(n) {
    
        
     console.log(n);
    return function () {
        return countUp(n + 1);
    }
}
const result = trampoline(() => countUp(0));
console.log('No stack overflow!', result);

