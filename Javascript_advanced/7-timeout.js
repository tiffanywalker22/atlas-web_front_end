console.log('Start of the execution queue');

for (let i = 1; i <= 100; i++) {
    setTimeout(function () {
        console.log(i);

        if (i === 100) {
            console.log('End of the loop printing');

            setTimeout(function () {
                console.log('Final code block to be executed');
            }, 0);
        }
    }, 0);
}