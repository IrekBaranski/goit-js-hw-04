console.log("<js-hw-04>", '\n', "<task-1>");
// The function declares 
//products - an OBJECT in which: the keys contain the names of the goods and their values - the quantity of these goods.For example { apples: 2, grapes: 4 }.
//containerSize - number, maximum number of goods units that the container can hold.
//returns the result of checking whether all goods will fit in the container.

function isEnoughCapacity(products, containerSize) {
  let productsQuantity = 0;
    for (product in products) {
        productsQuantity = productsQuantity + products[product];
    }
    return  (productsQuantity <= containerSize);
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false


