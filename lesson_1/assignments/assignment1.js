let counter = 0;

function testStack() {
    counter++;
    testStack();
}

try {
    testStack();
} catch (err) {
    console.log("Error:", err.message);
    console.log("Stack depth:", counter);
}