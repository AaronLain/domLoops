console.log('LOOOOOOOPS');

const colors = ['pink', 'blue', 'fuchia', 'carmine', 'red'];

const colorLoop = () => {
    let domString = ''
    for (color in colors) {
        domString += `<h1>${colors[color]}</h1>`;
    }
    console.log(domString);
};

const instructors = [
    {firstName: 'zoe', lastName: 'ames'},
    {firstName: 'mary', lastName: 'west'},
    {firstName: 'luke', lastName: 'lancaster'}
];

const nameLoops = () => {
    let nameString = ''
    for (obj in instructors) {
        nameString += `<h2>${instructors[obj].firstName} ${instructors[obj].lastName}</h2>`;
    }
    console.log(nameString);
}


colorLoop();

nameLoops();