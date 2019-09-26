import utilities from '../helpers/utilities.js';

const condiments = [
    {id:'condiment1', name:'Honey Mustard', price: 0},
    {id:'condiment2', name:'Ranch', price: 0},
    {id:'condiment3', name:'Sweet Onion', price: 0},
    {id:'condiment4', name:'Barbeque', price: 0},
    {id:'condiment5', name:'Polynesian', price: 0},
]

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${condiments[i].id}">
            <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
        </div>`
        utilities.printToDom('condiments-counter', domString);
    }
};

export default { printCondimentOptions };