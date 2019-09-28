import utilities from '../helpers/utilities.js';

const condiments = [
    {id:'condiment1', name:'Honey Mustard', price: 75},
    {id:'condiment2', name:'Ranch', price: 75},
    {id:'condiment3', name:'Sweet Onion', price: 75},
    {id:'condiment4', name:'Barbeque', price: 100},
    {id:'condiment5', name:'Polynesian', price: 100},
]

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for (let j = 0; j < condimentCheckboxes.length; j ++) {
        for (let k = 0; k < condiments.length; k ++) {
            if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id) {
                selectedCondiments.push(condiments[k]);
            }
        }
    }
    return selectedCondiments;
};

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
            <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
        </div>`
        utilities.printToDom('condiments-counter', domString);
    }
};

export default { printCondimentOptions, getSelectedCondiments };