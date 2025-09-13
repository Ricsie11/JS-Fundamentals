const args1 = parseInt(process.argv[2]);
const args2 = parseInt(process.argv[3]);

function factorial(n) {
    if (isNaN(n) || n <= 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(args1))
console.log(factorial(args2))