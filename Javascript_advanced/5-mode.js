function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let dark = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let scream = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement('p');
    let spookyButton = document.createElement('button');
    let darkButton = document.createElement('button');
    let screamButton = document.createElement('button');

    paragraph.innerHTML = 'Welcome Holberton!';
    spookyButton.innerHTML = 'Spooky';
    darkButton.innerHTML = 'Dark mode';
    screamButton.innerHTML = 'Scream mode';

    document.body.append(paragraph);
    document.body.append(spookyButton);
    document.body.append(darkButton);
    document.body.append(screamButton);

    spookyButton.addEventListener('click', spooky);
    darkButton.addEventListener('click', dark);
    screamButton.addEventListener('click', scream);
}

main();