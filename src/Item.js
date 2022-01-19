class Item {
    id;
    price;
    constructor(id, price) {
        this.id = id;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getPrice() {
        return this.price;
    }
}

module.exports = Item;