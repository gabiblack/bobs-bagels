const menu = require("./src/menu.json");
const ItemTest = require("./src/ItemTest");

const item = new ItemTest(menu.BGLE);

console.log(item);
console.log(item.getName());
console.log(item.getVariant());
console.log(item.getPrice());