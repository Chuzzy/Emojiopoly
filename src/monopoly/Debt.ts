import { MonopolyGame, Player } from "./Monopoly";
import * as _ from "lodash";

/**
 * A debt to be paid to another player or the bank.
 * @class
 */
export class Debt {
    /**
     * The amount of money left to pay.
     */
    public amount: number;

    /**
     * Attempts to pay the debt.
     * The debt amount will be reduced if the debtor doesn't have enough money.
     * @throws Error if the debtor has no money.
     */
    public payDebt() {
        if (this.debtor.money === 0) {
            // Debt is unpayable
            throw new Error("No money to pay this debt.");
        }
        else if (this.amount > this.debtor.money) {
            // Pay as much debt as possible
            this.amount -= this.debtor.money;
            this.debtor.money = 0;
            this.game.messageEventHandler(`${this.debtor} still needs to pay 💷${this.amount} to ${this.creditor || "the bank"}`);
        } else {
            // Pay off the (remaining) debt
            this.game.messageEventHandler(`${this.debtor} paid ${this.creditor || "the bank"} 💷${this.initialAmount}`);

            this.debtor.money -= this.amount;

            // Pay the money to the creditor or into free parking (or no one)
            if (this.creditor !== null)
                this.creditor.money += this.initialAmount;
            else if (this.game.houseRules.freeParkingJackpot === "fines")
                this.game.addToJackpot(this.initialAmount);

            // Remove the debt
            _.remove(this.game.unpaidDebts, this);
        }
    }

    public toString() {
        return `${this.debtor} owes ${this.creditor || "the bank"} ${this.initialAmount}`;
    }

    /**
     * Creates a new debt and adds it to the game's unpaid debts.
     * @param game The game this debt belongs to.
     * @param debtor The player who owes money.
     * @param creditor The player who is receiving the money
     * or null if the money is owed to the bank.
     * @param initialAmount The initial amount of money owed.
     */
    constructor(public readonly game: MonopolyGame, public readonly debtor: Player, public readonly creditor: Player | null, public readonly initialAmount: number) {
        this.amount = initialAmount;
        game.unpaidDebts.push(this);
    }
}
