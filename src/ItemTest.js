class ItemTest {
    constructor(menuData = {}) {
        Object.assign(this, menuData);
    }
    getName() {
        return this.name;
    }
    getVariant() {
        return this.variant;
    }
    getPrice() {
        return this.price;
    }
}

module.exports = ItemTest;