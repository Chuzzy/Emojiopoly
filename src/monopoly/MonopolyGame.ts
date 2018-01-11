import * as _ from "lodash";
import { Player, Debt, Square } from "./Monopoly";

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
     */
    public finishTurn() {
        if (_.isEmpty(this.unpaidDebts)) {
            this.isTurnFinished = true;
            if (this.consecutiveDoubles === 0)
                this.currentTurnIndex = ++this.currentTurnIndex % this.players.length;
        } else {
            throw new Error("There are still debts to be paid: " + this.unpaidDebts);
        }
    }

    constructor(public board: Square[], public playerNames: string[], public houseRules: {
        /**
         * Whether players need a monopoly to construct improvements.
         */
        needMonopolyToBuild: boolean,
        /**
         * Whether players must build evenly on monopolies.
         */
        evenBuildRule: boolean
        /**
         * Whether players collect rent in jail.
         */
        rentInJail: boolean,
        /**
         * When a player rolls doubles to get out of jail,
         * whether they are awarded a second turn.
         */
        extraTurnOnRollingOutOfJail: boolean,
        /**
         * Whether players can trade with others to pay off debt they cannot afford.
         */
        tradeOutOfBankruptcy: boolean,
        /**
         * Whether the bank covers for unpaid rent when a player goes bankrupt.
         */
        bankCoversUnpaidRent: boolean,
        /**
         * When a player goes bankrupt to an opponent,
         * whether their assests are given to the bank instead of the opponent.
         */
        bankruptAssetsAlwaysToBank: boolean,
        /**
         * Whether players can buy mortgaged properties from the bank.
         */
        purchaseMortgagedProperties: boolean,
        /**
         * The money awarded to a player when landing on Free Parking.
         */
        freeParkingJackpot: number | "fines",
        /**
         * The money awarded to a player when they pass Go.
         */
        goSalary: number,
        /**
         * What happens when a player lands on Go.
         * They may be awarded normal or double salary or move to any space on the board.
         */
        landOnGo: "normal" | "double" | "freemove",
        /**
         * The amount of money players start with.
         */
        startingMoney: number,
        /**
         * How many turns a player is allowed to stay in jail for
         * before being forced to post bail.
         */
        turnsInJail: number,
        /**
         * The amount of money a player needs to spend to pay
         * to get out of jail.
         */
        bailAmount: number,
        /**
         * The number of consecutive doubles a player is allowed to roll
         * before being sent to jail.
         */
        maxConsecutiveDoubles: number,
        /**
         * The number of houses available. Max 88.
         */
        houseLimit: number,
        /**
         * The number of hotels available. Max 22.
         */
        hotelLimit: number,
        /**
         * The percentage of the purchase price earned when a player mortgages a property.
         */
        mortgageRate: number
        /**
         * The percentage of the purchase price spent when a player unmortgages a property.
         */
        unmortgageRate: number,
        /**
         * The percentage of the purchase price spent per property per turn.
         */
        maintenanceRate: number,
        /**
         * The money that must be paid when landing on income tax.
         */
        incomeTax: number,
        /**
         * The money that must be paid when landing on super tax.
         */
        superTax: number
    }) {
        playerNames.forEach(name => {
            let newPlayer = new Player(name, this.houseRules.startingMoney, board[0]);
            board[0].occupants.push(newPlayer);
        });
    }
}
