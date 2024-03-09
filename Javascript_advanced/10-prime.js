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

for (let i = 0; i < 100; i++) {
    let start = performance.now();
    countPrimeNumbers();
    let end = performance.now();

    totalExecutionTime += end - start;
}

console.log(`Execution time of calculating prime numbers 100 times was ${totalExecutionTime} milliseconds.`);
