import utilities from '../helpers/utilities.js';

const printOrderButton = () => {
    let domString = `<button class="btn btn-light" id="order-button">Create Sandwich</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };