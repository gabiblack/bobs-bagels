class Basket {
    items;
    capacity;
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.items = [];
    }
    getCapacity() {
        return this.capacity;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        const basketIds = this.items.map(x => x.id);
        if (basketIds.includes(item.id)) {
            console.log(`You already have this bagel in your basket`);
        } else {
            this.items.push(item);
        }
    }
    removeItem() {
        const removedItem = this.items.pop();
        if (!removedItem) {
            console.log(`There are no more items to remove`);
            return null;
        }
        return removedItem;
    }
    isFull() {
        return (this.items.length === this.capacity) ? true : false;
    }
    getItemTotal() {
        const itemPrices = this.items.map(x => x.price);
        console.log(itemPrices)
        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        const total = itemPrices.reduce(reducer);

        return total;
    }
};

module.exports = Basket;