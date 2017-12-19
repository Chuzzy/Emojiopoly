namespace Monopoly {
    /**
     * A property that can be bought, traded or mortgaged.
     */
    export class Property {
        /**
         * The number of buildings on this property.
         */
        public buildingsCount: number;
        /**
         * Whether this property is mortgaged.
         */
        public isMortgaged: boolean;

        /**
         * Initialize a new Property instance, specifying the name, price and building costs.
         * @param name The name of the property.
         * @param price The price to purchase the property.
         * @param buildPrice The cost to build on the property.
         */
        constructor(
            public readonly name: string,
            public readonly price: number,
            public readonly buildPrice: number
        ) {
            this.buildingsCount = 0;
            this.isMortgaged = false;

        }
    }
    
    export class Square {
        constructor(
            public readonly squareType: "go" | "jail" | "gotojail" | "parking" | "property" | "chance" | "chest" | "incometax" | "supertax",
            public readonly property: Property | null
        ) {
            if (squareType !== "property" && property !== null) {
                throw new Error(`Cannot create a Square with a squareType of ${squareType} if property is not null.`);
            } else if (squareType === "property" && property === null) {
                throw new Error("Cannot create a Square with a squareType of property if property is null.");
            }
        }
    }

    /**
     * A player of the game.
     * @class
     */
    export class Player {
        /**
         * An array of the properties owned by this player.
         */
        public ownedProperties: Property[];
        /**
         * The square this player currently resides on.
         */
        public currentSquare: Square;
        /**
         * Initialize a new player.
         * @param name The player's name.
         * @param money The player's starting money.
         * @param startSquare The square the player starts on. This should be the "Go" square.
         */
        constructor(public name: string, public money: number, startSquare: Square) {
            this.currentSquare = startSquare;
        }
    }

    export class Monopoly {
        constructor(public board: Square[], public houseRules: {
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
            

            throw new Error("TODO");
        }
    }
}