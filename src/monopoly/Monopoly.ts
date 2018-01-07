namespace Monopoly {
    /**
     * A property that can be bought, traded or mortgaged.
     * @class
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
         * The player who owns this property.
         */
        public owner: Player | null;
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
    
    /**
     * A square on the board.
     * @class
     */
    export class Square {
        public occupants: Player[];

        public addOccupant(occupant: Player) {
            this.occupants.push(occupant);
        }

        public removeOccupant(occupant: Player) {
            this.occupants.splice(this.occupants.indexOf(occupant), 1);
        }

        constructor(
            public readonly squareContents: "go" | "jail" | "gotojail" | "parking" | "chance" | "chest" | "incometax" | "supertax" | Property
        ) {
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
         * The number of turns this player has been in jail (0 if not in jail).
         */
        public turnsInJail: number;
        /**
         * Initialize a new player.
         * @param name The player's name.
         * @param money The amount of money this player has.
         * @param startSquare The square the player starts on. This should be the "Go" square.
         */
        constructor(public name: string, public money: number, startSquare: Square) {
            this.currentSquare = startSquare;
        }
    }

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
        constructor(public readonly game: Monopoly, public readonly debtor: Player, public readonly creditor: Player | null, public readonly amount: number) {
        }
    }

    /**
     * A game of Monopoly.
     * @class
     */
    export class Monopoly {
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
         * Roll the dice and move the player.
         */
        public rollDice() {
            let dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
            let total = dice[0] + dice[1];

            let currentPlayer: Player = this.players[this.currentTurnIndex];
            let newPosition: number = this.board.indexOf(currentPlayer.currentSquare) + total;
                        
            if (dice[0] === dice[1]) {
                if (++this.consecutiveDoubles === this.houseRules.maxConsecutiveDoubles) {
                    // Send player to jail.
                    currentPlayer.currentSquare.removeOccupant(currentPlayer);

                    currentPlayer.turnsInJail = 1;
                    currentPlayer.currentSquare = this.board[10];
                    currentPlayer.currentSquare.addOccupant(currentPlayer);

                    this.consecutiveDoubles = 0;
                } else {
                    this.consecutiveDoubles = 0;
                }
            }

            // Collect salary if they passed Go.
            if (newPosition > 39) {
                currentPlayer.money += this.houseRules.goSalary;
                newPosition -= 40;
            }

            // Remove player from old square's occupants.
            currentPlayer.currentSquare.removeOccupant(currentPlayer);

            // Move player to their new square.
            let newSquare: Square = this.board[newPosition];
            newSquare.addOccupant(currentPlayer);
            currentPlayer.currentSquare = newSquare;

            // TODO: Handle action.
        }

        /**
         * Finish this person's turn.
         */
        public finishTurn() {
            if (this.consecutiveDoubles === 0)
                this.currentTurnIndex = ++this.currentTurnIndex % this.players.length;
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
}