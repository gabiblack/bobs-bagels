class Basket {
    items;
    capacity;
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem() {
        this.items.pop();
    }
    isFull() {
        return (this.items.length === this.capacity) ? true : false;
    }
};

module.exports = Basket;