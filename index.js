//Don't test functions that have prompts or alerts(unless you stub it with sinon if you can figure that out)

class Card {
    // In the Card class constructor, I make it so you can pass in the three important things for each card to be created. Overall is the most important stat that keeps track of the value
    // for when I compare cards.
    constructor(cardName, suit, overall) {
        this.cardName = cardName;
        this.suit = suit;
        this.overall = overall;
    }
}

class Deck {
    constructor() {
        // In the Deck class constructor I store a cards array.
        this.cards = [];

        // I set up variables for each card's properties.
        const overall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const suits = ['Spades', 'Hearts', 'clubs', 'diamonds'];
        const name = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        // I then use a for loop to fill the cards array with 52 total cards which are all different.
        // These will later be randomized and pushed into a new array.
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < name.length; j++) {
                const card = new Card(name[j], suits[i], overall[j]);
                this.cards.push(card)
            }
        }
    }
}

class Player {
    constructor(name) {
        // Here I have a name, the starting score, and the card array for each player in the Player class constructor.
        this.name = name;
        this.points = 0;
        this.hand = [];
    }
}

class War {
    constructor() {
        // I store the players that are created in the constructor of my War class.
        this.players = [];
    }

    start() {
        // This method is the main thing that runs the game. It should be running the whole time the game is active.
        // I first welcome the user to the site.
        alert('Welcome to the game of War! Good luck!');
        
        // Next I ask the user to enter in a name for both of the players. If the user returns the prompt blank, it will re-prompt them with an error message.
        // It will then create a new instance of the Player class for each of them, passing in the user input.
        let player1Name = prompt(`What is Player 1's name?`);
        if (!player1Name) {
            player1Name = prompt('Invalid name. Please try again.');
        }
        this.players.push(new Player(player1Name));

        let player2Name = prompt(`What is Player 2's name?`);

        if (!player2Name) {
            player2Name = prompt('Invalid name. Please try again.');
        }
        this.players.push(new Player(player2Name));

        // Next the start method runs the shuffleCards method to randomize the cards on startup.
        this.shuffleCards();
        // Then I distribute the cards to each player's hand.
        this.distributeCards();
        // Finally, I run through the whole game and declare a winner in the end.
        this.battles();
    }

    shuffleCards() {
        // In this shuffle cards method, I use the Fisher-Yates shuffle algorithm to randomize the deck.cards array.
        for (let i = deck.cards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
        }
    }

    distributeCards() {
        // In this distributeCards method I use the slice method to transfer the randomized cards into each player's hand evenly.
            this.players[0].hand = deck.cards.slice(0, 26);
            this.players[1].hand = deck.cards.slice(26, 52);
        }

    battles() {
        // In this battles method, I use a for loop to iterate through a player's hand while each time comparing and printing out the winner with the higher overall card.
        // I then add a point to whoever won the round.
        // I also keep track of score here.
        for (let i = 0; i < this.players[0].hand.length; i++) {
            if (this.players[0].hand[i].overall > this.players[1].hand[i].overall) {
                console.log(`
                ${this.players[0].name}: ${this.players[0].hand[i].cardName} of ${this.players[0].hand[i].suit}
                ${this.players[1].name}: ${this.players[1].hand[i].cardName} of ${this.players[1].hand[i].suit}
                ${this.players[0].name} wins the round!`);
                this.players[0].points++;
            }
            if (this.players[0].hand[i].overall < this.players[1].hand[i].overall) {
                console.log(`
                ${this.players[0].name}: ${this.players[0].hand[i].cardName} of ${this.players[0].hand[i].suit}
                ${this.players[1].name}: ${this.players[1].hand[i].cardName} of ${this.players[1].hand[i].suit}
                ${this.players[1].name} wins the round!`);
                this.players[1].points++;
            }
        }
        // After the for loop has iterated through the whole hand, it then compares the final scores and declares a winner with a tie being an option.
        if (this.players[0].points > this.players[1].points) {
            console.log(`${this.players[0].name} won!`);
        } else if (this.players[0].points < this.players[1].points) {
            console.log(`${this.players[1].name} won!`);
        } else {
            console.log("It's a tie!");
            console.log(`${this.players[0].points}
            ${this.players[1].points}`);
        }
    }
}

// Below I instantiate a new Deck class and a new War class.
// Finally, I begin the game by using the start() method within the war class.
const deck = new Deck();
const war = new War();
war.start();