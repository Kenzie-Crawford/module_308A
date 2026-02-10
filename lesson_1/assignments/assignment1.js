function countUp(n) {
    if (n === 0) return "done!";
    console.log(n);
    return countUp(n + 1)
    }  

    try{
    console.log(countUp(0));
    } catch (e) {
    console.log("Stack overflow!", e.message);
    }








//  function trampoline(fn) {
//     let result = fn();
//     while (typeof result === 'function') {
//         result = result();
//     }
//     return result;
// }

// function countUp(n) {
//     if (n === 15000) return "done!"; 
//      console.log(n);
    
//         return () => countUp(n + 1);
//     }

// const result = trampoline(() => countUp(0));
// console.log('No stack overflow!', result); 

