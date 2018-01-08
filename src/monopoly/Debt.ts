import { MonopolyGame, Player } from "./Monopoly";

/**
 * A debt to be paid to another player or the bank.
 * @class
 */
export class Debt {
    /**
     * Pays the debt.
     * @throws Error if the debtor has less money than the debt amount.
     */
    public payDebt() {
        if (this.amount > this.debtor.money) {
            // Debt is unpayable
            throw new Error("Not enough money to pay this debt.");
        } else {
            this.game.messageEventHandler(`${this.debtor} paid ${this.creditor || "the bank"} 💷${this.amount}`);

            this.debtor.money -= this.amount;
            if (this.creditor !== null)
                this.creditor.money += this.amount;
            else if (this.game.houseRules.freeParkingJackpot === "fines")
                this.game.addToJackpot(this.amount);
        }
    }

    public toString() {
        return `${this.debtor} owes ${this.creditor || "the bank"} ${this.amount}`;
    }

    /**
     * Creates a new debt.
     * @param game The game this debt belongs to.
     * @param debtor The player who owes money.
     * @param creditor The player who is receiving the money
     * or null if the money is owed to the bank.
     * @param amount The amount of money owed.
     */
    constructor(public readonly game: MonopolyGame, public readonly debtor: Player, public readonly creditor: Player | null, public readonly amount: number) {
    }
}
