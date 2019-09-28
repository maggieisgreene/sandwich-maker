import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';
import veggies from './veggies.js';

const createFinalOrder = (arr) => {
    const total = arr.reduce((prev, curr) => prev + curr.price, 0);
    let domString2 = '';
    for (let i = 0; i < arr.length; i ++) {
        domString2 += `<h6>${arr[i].name} $${(arr[i].price/100).toFixed(2)}</h6>`;
    }
    domString2 += `<h4>Final Price: $${(total/100).toFixed(2)}</h4>`
    utilities.printToDom('final-selections', domString2);
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