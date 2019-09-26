import bread from './components/bread.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import meat from './components/meat.js';
import veggies from './components/veggies.js';

const init = () => {
    bread.printBreadOptions();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    meat.printMeatOptions();
    veggies.printVeggieOptions();
};

init();