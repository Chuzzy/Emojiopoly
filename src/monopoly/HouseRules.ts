/**
 * A set of rules to use in a game of Monopoly.
 */
export interface HouseRules {
    /**
     * Whether players need a monopoly to construct improvements.
     */
    needMonopolyToBuild: boolean;
    /**
     * Whether players must build evenly on monopolies.
     */
    evenBuildRule: boolean;
    /**
     * Whether players collect rent in jail.
     */
    rentInJail: boolean;
    /**
     * When a player rolls doubles to get out of jail,
     * whether they are awarded a second turn.
     */
    extraTurnOnRollingOutOfJail: boolean;
    /**
     * Whether players can trade with others to pay off debt they cannot afford.
     */
    tradeOutOfBankruptcy: boolean;
    /**
     * Whether the bank covers for unpaid rent when a player goes bankrupt.
     */
    bankCoversUnpaidRent: boolean;
    /**
     * When a player goes bankrupt to an opponent,
     * whether their assests are given to the bank instead of the opponent.
     */
    bankruptAssetsAlwaysToBank: boolean;
    /**
     * Whether players can buy mortgaged properties from the bank.
     */
    purchaseMortgagedProperties: boolean;
    /**
     * The money awarded to a player when landing on Free Parking.
     */
    freeParkingJackpot: number | "fines";
    /**
     * The money awarded to a player when they pass Go.
     */
    goSalary: number;
    /**
     * What happens when a player lands on Go.
     * They may be awarded normal or double salary or move to any space on the board.
     */
    landOnGo: "normal" | "double" | "freemove";
    /**
     * The amount of money players start with.
     */
    startingMoney: number;
    /**
     * How many turns a player is allowed to stay in jail for
     * before being forced to post bail.
     */
    turnsInJail: number;
    /**
     * The amount of money a player needs to spend to pay
     * to get out of jail.
     */
    bailAmount: number;
    /**
     * The number of consecutive doubles a player is allowed to roll
     * before being sent to jail.
     */
    maxConsecutiveDoubles: number;
    /**
     * The number of houses available. Max 88.
     */
    houseLimit: number;
    /**
     * The number of hotels available. Max 22.
     */
    hotelLimit: number;
    /**
     * The percentage of the purchase price earned when a player mortgages a property.
     */
    mortgageRate: number;
    /**
     * The percentage of the purchase price spent when a player unmortgages a property.
     */
    unmortgageRate: number;
    /**
     * The percentage of the purchase price spent per property per turn.
     */
    maintenanceRate: number;
    /**
     * The money that must be paid when landing on income tax.
     */
    incomeTax: number;
    /**
     * The money that must be paid when landing on super tax.
     */
    superTax: number;
}