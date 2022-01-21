const menu = require("./menu.json")

class Item {
    id;
    price;
    constructor(sku, id, price) {
        this.sku = sku;
        this.id = id;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getPrice() {
        return this.price;
    }
    getItem(sku) {
        return menu[sku];
    }
}

module.exports = Item;