import utilities from '../helpers/utilities.js';

const cheeses = [
    {id:'cheese1', name:'Provolone', price: 0 },
    {id:'cheese2', name:'American', price: 0 },
    {id:'cheese3', name:'Swiss', price: 0 },
    {id:'cheese4', name:'Pepperjack', price: 0 },
    {id:'cheese5', name:'Cheddar', price: 0 },
]

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
            <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
        </div>`
        utilities.printToDom('cheese-counter', domString);
    }
};

export default { printCheeseOptions };