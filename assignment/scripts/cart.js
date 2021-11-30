console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem (item) {
    if (isFull()) {
        return false;
    } else {
        basket.push(item);
        return true;
    }
}

function listItems () {
    for (let item of basket) {
        console.log(item);
    }
}

function empty () {
    basket = [];
}

// Stretch Goals
function isFull () {
    if (basket.length >= maxItems) {
        return true;
    } else {
        return false;
    }
}

function removeItem (item) {
    let index = basket.indexOf(item);
    console.log('testing remove item, here\'s index', index);
    if (index >= 0) {
        basket.splice(index, 1);
        return item;
    } else {
        return null;
    }
}

// ===================
// Testing
// ===================

console.log("Adding milk to basket", addItem("milk"));
console.log("Adding eggs to basket:", addItem("eggs"));
console.log("Adding bread to basket:", addItem("bread"));
console.log("Adding eggs to basket again:", addItem("eggs"));
console.log("Testing isFull - should return false", isFull());
console.log("Adding coffee to basket", addItem("coffee"));
console.log("Testing isFull - should return true", isFull());
console.log("Attempting to add carrots - should return false", addItem("carrots"));
console.log("Listed the basket contents:", listItems());
console.log("Removing eggs from the basket - should return eggs", removeItem("eggs"));
console.log("Listing the basket contents - the first eggs should be gone:", listItems());
console.log("Attempting to remove potatoes - should return null", removeItem("potatoes"));
console.log("Emptying the basket", empty());
console.log("Testing listing an empty basket:", listItems());