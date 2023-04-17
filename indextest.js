const expect = chai.expect;

describe("Deck", function() {
    describe("constructor", function() {
        it("should create a full deck of 52 cards", function() {
            const deck = new Deck();
            expect(deck.cards).to.have.lengthOf(52);
        });
    });

    describe("shuffleCards", function() {
        it("should shuffle the cards array", function() {
            const deck = new Deck();
            const war = new War();
            const originalCards = [...deck.cards];
            war.shuffleCards();
            expect(deck.cards).to.not.equal(originalCards);
        });
    });
});