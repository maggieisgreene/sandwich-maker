import utilities from '../helpers/utilities.js';

const veggies = [
    {id: 'veggie1', name:'Red Onions', price: 0},
    {id: 'veggie2', name:'Bread & Butter Pickles', price: 0},
    {id: 'veggie3', name:'Cucumber', price: 0},
    {id: 'veggie4', name:'Banana Peppers', price: 0},
    {id: 'veggie5', name:'Spinach', price: 0}
];

const printVeggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${veggies[i].id}">
            <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
        </div>`
        utilities.printToDom('veggies-counter', domString);
    }
};

export default { printVeggieOptions };