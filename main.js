console.log("DOM LOOPS 2: Electric Boogaloo");

const dinosaurs = [
{type: 't-rex', name: 'Chuck'},
{type: 'brachiosaurus', name: 'Dave'},
{type: 'velociraptor', name: 'Desmond'},
{type: 'allosaurus', name: 'Karen'}
];

const buildDinosaurCards = () => {
    let domString = '';
    for (dino in dinosaurs) {
        domString += '<div class="dinosaur">';
        domString +=    `<h3>${dinosaurs[dino].type}</h3>`;
        domString +=    `<p>${dinosaurs[dino].name}</p>`;
        domString += '</div>';
    }
    printToDom('dino-barn', domString);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}


buildDinosaurCards();
