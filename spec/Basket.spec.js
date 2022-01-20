const Basket = require("../src/Basket");
const Item = require("../src/Item");

describe("Basket Tests: ", () => {
    // Empty basket
    it("a basket is empty when created", () => {
        // Arrange
        const testBasket = new Basket();
        // Act
        const actual = testBasket.items.length;
        // Assert
        expect(actual).toHaveSize(0);
    });
    //Adding an item
    it("adding an item to the basket", () => {
        // Arrange
        const testBasket = new Basket();
        const testItem = new Item('plain', 6);
        // Act
        testBasket.addItem(testItem);
        // Assert
        expect(testBasket.items).toHaveSize(1);
    });
    // Removing an item
    it("removing an item from the basket", () => {
        // Arrange
        const testBasket = new Basket();
        const testItem = new Item(`plain`, 6);
        testBasket.addItem(testItem);
        //Act
        testBasket.removeItem();
        // Assert 
        expect(testBasket.items).toHaveSize(0);
    });
    // Create basket with diffferent capacity
    it("create basket with different capacity", () => {
        // Arrange
        const testBasket = new Basket(6);
        // Act
        const actual = testBasket.capacity;
        // Assert
        expect(actual).toEqual(6);
    });
    // Check if basket is full
    it("check if basket is full", () => {
        // Arrange
        const testBasket = new Basket(1);
        const item1 = new Item(`plain`, 6);
        testBasket.addItem(item1);
        // Act
        const actual = testBasket.isFull();
        // Assert
        expect(actual).toBeTrue();
    });
    // remomving a non existing item
    it("removing a non existing item", () => {
        // Arrange
        const testBasket = new Basket();
        // Act
        const actual = testBasket.removeItem();
        // Assert
        expect(actual).toBeNull();
    });
    // not allowing an already existig item to be added
    it(`dissallowing adding an already existing item`, () => {
        // Arrange
        const testBasket = new Basket();
        const item1 = new Item(`plain`, 6);
        const item2 = new Item(`plain`, 6);
        testBasket.addItem(item1);
        // Act
        const actual = testBasket.addItem(item2);
        // Assert 
        expect(actual).toBeUndefined();
    });
    // sum total of basket
    it(`sum of all items in the basket`, () => {
        // Arrange
        const testBasket = new Basket();
        const item1 = new Item(`plain`, 6);
        const item2 = new Item(`everything`, 8);
        const item3 = new Item(`rye`, 4);
        testBasket.addItem(item1);
        testBasket.addItem(item2);
        testBasket.addItem(item3);
        // Act
        let actual = testBasket.getItemTotal();
        // Assert
        expect(actual).toEqual(18);
    });
    // check item price before adding to basket
    it(`check price of item`, () => {
        // Arrange
        const testItem = new Item(`plain`, 6);
        // Act
        const itemPrice = testItem.getPrice();
        // Assert
        expect(itemPrice).toEqual(6);
    });
});