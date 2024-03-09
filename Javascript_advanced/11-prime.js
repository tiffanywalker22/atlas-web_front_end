function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

let totalExecutionTime = 0;
let iteration = 0;

function processIterations() {
    let start = performance.now();

    for (let i = 0; i < 10; i++) {
        countPrimeNumbers();
        iteration++;
    }

    let end = performance.now();
    totalExecutionTime += end - start;

    if (iteration < 100) {
        setTimeout(processIterations, 0);
    } else {
        console.log(`Execution time of calculating prime numbers 100 times was ${totalExecutionTime} milliseconds.`);
    }
}
setTimeout(processIterations, 0);
