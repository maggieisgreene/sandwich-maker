import utilities from '../helpers/utilities.js';

const meats = [
    {id:'meat1', name:'Black Forrest Ham', price: 0},
    {id:'meat2', name:'Turkey', price: 0},
    {id:'meat3', name:'Grilled Chicken', price: 0},
    {id:'meat4', name:'Bacon', price: 0},
    {id:'meat5', name:'Salami', price: 0},
]

const printMeatOptions = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i ++) {
        domString += `    
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input cheese" id="${meats[i].id}">
            <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
        </div>`
        utilities.printToDom('meat-counter', domString);
    }
};

export default { printMeatOptions };