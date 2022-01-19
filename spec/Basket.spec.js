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
        const testItem = new Item();
        // Act
        testBasket.addItem(testItem);
        // Assert
        expect(testBasket.items).toHaveSize(1);
    });
    // Removing an item
    it("removing an item from the basket", () => {
        // Arrange
        const testBasket = new Basket();
        const testItem = new Item();
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
        const item1 = new Item();
        testBasket.addItem(item1);
        // Act
        const actual = testBasket.isFull();
        // Assert
        expect(actual).toBeTrue();
    });
    // remomving a non existing item
    // not allowing an already existig item
    // sum total of basket
});

// making order

// changing an order

// item price before adding