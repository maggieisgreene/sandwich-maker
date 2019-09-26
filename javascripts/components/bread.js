import utilities from '../helpers/utilities.js';

const breads = [
    {id: 'bread1', name: 'Italian', price : 0},
    {id: 'bread2', name: 'Whole Wheat', price : 0},
    {id: 'bread3', name: 'Italian Herbs & Cheese', price : 0},
    {id: 'bread4', name: 'Honey Oat', price : 0},
    {id: 'bread5', name: 'Gluten-Free', price : 0}
];

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${breads[i].id}">
            <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
        </div>`
        utilities.printToDom('bread-counter', domString);
    }
};

export default { printBreadOptions };