import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';
import veggies from './veggies.js';

const createFinalOrder = (arr) => {
    let domString2 = '';
    for (let i = 0; i < arr.length; i ++) {
        domString2 += `<h6>${arr[i].name} $${arr[i].price}</h6>`;
    }
    utilities.printToDom('final-order2', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedCondiments = condiments.getSelectedCondiments();
    const selectedVeggies = veggies.getSelectedVeggies();
    createFinalOrder(selectedBreads.concat(selectedMeats, selectedCheeses, selectedCondiments, selectedVeggies));
}

const printOrderButton = () => {
    let domString = `<button class="btn btn-light" id="order-button">Create Sandwich</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };