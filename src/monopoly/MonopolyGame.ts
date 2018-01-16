import * as _ from "lodash";
import { Player, Debt, Square, Card, HouseRules } from "./Monopoly";

/**
 * A game of Monopoly.
 * @class
 */
export class MonopolyGame {
    /**
     * The amount of money in the free parking jackpot.
     */
    public jackpot: number;
    /**
     * The index of the player whose turn it is.
     */
    public currentTurnIndex: number;

    /**
     * The number of consecutive doubles the current player has achieved.
     */
    public consecutiveDoubles: number;

    /**
     * The players currently in the game.
     */
    public players: Player[];

    /**
     * The player whose turn it currently is.
     */
    public get currentPlayer(): Player {
        return this.players[this.currentTurnIndex];
    }

    /**
     * The numbers on the two dice.
     */
    public dice: number[];

    /**
     * Whether the turn is over (and the dice can be rolled).
     */
    public isTurnFinished: boolean;

    /**
     * An array of debts that must be paid off before the turn can end.
     */
    public unpaidDebts: Debt[];

    /**
     * A function that is called when a message is sent 
     * receiving the message as a parameter.
     */
    public messageEventHandler: (message: string) => void;

    /**
     * The cards in the chance pile.
     */
    public chanceCards: Card[];

    /**
     * The cards in the community chest pile.
     */
    public chestCards: Card[];

    /**
     * The index of the chance card to use when a player lands on chance.
     */
    public chanceCardIndex: number;

    /**
     * The index of the community chest card to use when a player lands on chance.
     */
    public chestCardIndex: number;

    /**
     * Adds money to the free parking jackpot and broadcasts a message
     * using the message event handler.
     * @param amount The amount of money to add.
     */
    public addToJackpot(amount: number) {
        this.jackpot += amount;
        this.messageEventHandler(`💷${amount} has been added to the free parking jackpot, for a total of 💷${this.jackpot}`);
    }

    /**
     * Rolls the dice, or forces the dice to be certain numbers.
     * If the current player is in jail,
     * this will release them if they roll doubles.
     * @param dice1 Forces the first die to be this number.
     * @param dice2 Forces the second die to be this number.
     * @throws Error if isTurnFinished is false.
     */
    public rollDice(die1: number = undefined, die2: number = undefined): void {
        if (!this.isTurnFinished) {
            throw new Error("Cannot roll dice because the turn is not finished.");
        } else {
            this.isTurnFinished = false;
            if (die1 && die2) {
                this.dice = [die1, die2];
            } else {
                this.dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
            }
            this.messageEventHandler(`${this.currentPlayer.name} rolled ${this.dice}`);

            if (this.dice[0] === this.dice[1] && this.currentPlayer.turnsInJail > 0) {
                this.currentPlayer.turnsInJail = 0;
                this.messageEventHandler(`${this.currentPlayer.name} rolled doubles to get out of jail`);
            }
        }
        this.isTurnFinished = false;
    }

    /**
     * Moves the current player to a new square.
     * @param newSquare The square to move the player to.
     * @param awardSalary Whether the player should be given a salary for passing Go.
     */
    public moveToSquare(newSquare: Square, awardSalary: boolean = true) {
        if (awardSalary) {
            // If the destination is behind the player
            if (this.board.indexOf(newSquare) < this.board.indexOf(this.currentPlayer.currentSquare)) {
                this.currentPlayer.money += this.houseRules.goSalary;
                this.messageEventHandler(`${this.currentPlayer.name} collected 💷${this.houseRules.goSalary} salary`);
            }
        }

        this.currentPlayer.currentSquare.removeOccupant(this.currentPlayer);
        newSquare.addOccupant(this.currentPlayer);
        this.currentPlayer.currentSquare = newSquare;
    }

    /** 
     * Sends the current player to jail. 
     */
    public sendToJail() {
        // Move the player to jail.
        this.moveToSquare(this.board[10], false);

        this.currentPlayer.turnsInJail++;
    }

    /**
     * Sends the current player back the number of spaces.
     * @param numberOfSpaces The number of spaces to move back.
     * @throws Error if the number of spaces is greater than the current square index.
     */
    public moveBack(numberOfSpaces: number) {
        let currentSquareIndex = this.board.indexOf(this.currentPlayer.currentSquare);

        if (numberOfSpaces > currentSquareIndex) {
            throw new Error(`Cannot go back ${numberOfSpaces} spaces.`);
        }
        
        this.moveToSquare(this.board[currentSquareIndex - numberOfSpaces], false);
    }

    /**
     * Makes the current player pay to get out of prison.
     * The bail money is added to the free parking jackpot
     * if the rule is enabled.
     * 
     * @throws Error if the current player is not in jail.
     */
    public postBail(): void {
        if (this.currentPlayer.turnsInJail === 0)
            throw new Error("The current player, " + this.currentPlayer.name + ", is not in jail.");

        this.currentPlayer.money -= this.houseRules.bailAmount;
        this.messageEventHandler(`${this.currentPlayer.name} paid 💷${this.houseRules.bailAmount} to get out of jail`);
        if (this.houseRules.freeParkingJackpot === "fines") {
            this.addToJackpot(this.houseRules.bailAmount);
        }
    }

    /**
     * Takes a chance card, follows the instruction and decrements `this.chanceCardIndex`.
     */
    public takeChance() {
        let card = this.chanceCards[this.chanceCardIndex];
        this.handleCard(card);

        if (--this.chanceCardIndex < 0) {
            this.messageEventHandler("The WTF deck is being shuffled.");
            this.chanceCards = _.shuffle(this.chanceCards);
            this.chanceCardIndex = this.chanceCards.length - 1;
        }
    }
    
    /**
     * Takes a community chest card, follws the instruction and decrements `this.chestCardIndex`.
     */
    public takeChest() {
        let card = this.chestCards[this.chestCardIndex];
        this.handleCard(card);

        if (--this.chestCardIndex < 0) {
            this.messageEventHandler("The OMG deck is being shuffled.");
            this.chestCards = _.shuffle(this.chestCards);
            this.chestCardIndex = this.chestCards.length - 1;
        }
    }

    public handleCard(card: Card) {
        switch (card.action) {
            case "earn":
                this.currentPlayer.money += card.value as number;
                break;
            case "pay":
                this.unpaidDebts.push(new Debt(this, this.currentPlayer, null, card.value as number));
                break;
            case "back":
                this.moveBack(card.value as number);
                break;
            case "collecteach":
                this.players.forEach(player => {
                    this.unpaidDebts.push(new Debt(this, player, this.currentPlayer, card.value as number));
                });
                break;
            case "payeach":
                this.players.forEach(player => {
                    this.unpaidDebts.push(new Debt(this, this.currentPlayer, player, card.value as number));
                });
                break;
            case "gotojail":
                this.sendToJail();
                break;
            case "stealmoney":
                this.unpaidDebts.push(new Debt(this, _.sample(this.players), this.currentPlayer, card.value as number));
                break;
            case "stolenmoney":
                this.unpaidDebts.push(new Debt(this, this.currentPlayer, _.sample(this.players), card.value as number));
                break;
            case "streetrepairs":
                let numberOfHouses = _.sumBy(this.currentPlayer.ownedProperties.filter(property => property.buildingsCount < 5), "buildingsCount");
                let numberOfHotels = this.currentPlayer.ownedProperties.filter(property => property.buildingsCount === 5).length;

                let totalCost = numberOfHouses * (card.value as number[])[0] + numberOfHotels * (card.value as number[])[1];

                this.unpaidDebts.push(new Debt(this, this.currentPlayer, null, totalCost));
                break;
            case "choice":
                // TODO: Implement choice card
                break;
            case "doubletransport":
                // TODO: Implement double transport card
                break;
            case "advance":
                // TODO: Implement advance to card
                break;
            default:
                break;
        }
    }

    /**
     * Move the player.
     */
    public movePlayer() {
        let total = this.dice[0] + this.dice[1];

        let newPosition: number = this.board.indexOf(this.currentPlayer.currentSquare) + total;

        if (this.dice[0] === this.dice[1]) {
            if (++this.consecutiveDoubles === this.houseRules.maxConsecutiveDoubles) {
                // Send player to jail.
                this.sendToJail();

                this.messageEventHandler(`${this.currentPlayer.name} rolled ${this.houseRules.maxConsecutiveDoubles} doubles in a row - under arrest`);
                this.consecutiveDoubles = 0;
            } else {
                this.consecutiveDoubles = 0;
            }
        }

        // Apply the double salary rule if they passed Go.
        if (newPosition === 40) {
            this.currentPlayer.money += this.houseRules.goSalary;
        }

        // Collect salary if they passed Go.
        if (newPosition > 39) {
            this.currentPlayer.money += this.houseRules.goSalary;
            newPosition -= 40;
        }

        let newSquare: Square = this.board[newPosition];
        this.moveToSquare(newSquare);

        // TODO: Handle action.
    }

    /**
     * Attempts to pay all unpaid debts.
     * @throws Error if an error occurs while paying a debt.
     */
    public payDebts() {
        this.unpaidDebts.forEach(debt => {
            debt.payDebt();
        });
    }

    /**
     * Finish this person's turn.
     * If there are unpaid debts, an attempt is made to pay them off using `payDebts`.
     */
    public finishTurn() {
        if (_.isEmpty(this.unpaidDebts)) {
            this.isTurnFinished = true;
            if (this.consecutiveDoubles === 0)
                this.currentTurnIndex = ++this.currentTurnIndex % this.players.length;
        } else {
            this.payDebts();
            if (!_.isEmpty(this.unpaidDebts))
                throw new Error("There are still debts to be paid: " + this.unpaidDebts);
        }
    }

    constructor(public board: Square[], public playerNames: string[], public houseRules: HouseRules) {
        playerNames.forEach(name => {
            let newPlayer = new Player(name, this.houseRules.startingMoney, board[0]);
            board[0].occupants.push(newPlayer);
        });
    }
}
