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
     * Move the player.
     */
    public movePlayer() {
        let total = this.dice[0] + this.dice[1];

        let newPosition: number = this.board.indexOf(this.currentPlayer.currentSquare) + total;

        if (this.dice[0] === this.dice[1]) {
            if (++this.consecutiveDoubles === this.houseRules.maxConsecutiveDoubles) {
                // Send player to jail.
                this.currentPlayer.currentSquare.removeOccupant(this.currentPlayer);

                this.currentPlayer.turnsInJail = 1;
                this.currentPlayer.currentSquare = this.board[10];
                this.currentPlayer.currentSquare.addOccupant(this.currentPlayer);

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

        // Remove player from old square's occupants.
        this.currentPlayer.currentSquare.removeOccupant(this.currentPlayer);

        // Move player to their new square.
        let newSquare: Square = this.board[newPosition];
        newSquare.addOccupant(this.currentPlayer);
        this.currentPlayer.currentSquare = newSquare;

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
