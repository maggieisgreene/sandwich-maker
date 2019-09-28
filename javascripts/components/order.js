import bread from './bread.js';
import cheese from './cheese.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (arr) => {
    let domString2 = '';
    for (let i = 0; i < arr.length; i ++) {
        domString2 += `<h2>${arr[i].name}</h2>`;
    }
    utilities.printToDom('final-order2', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedBreads.concat(selectedMeats, selectedCheeses));
}

const printOrderButton = () => {
    let domString = `<button class="btn btn-light" id="order-button">Create Sandwich</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };