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
        public ownedProperties: Property[];
        public currentSquare: Square;
        constructor(public money: number = 1500) {
        }
    }

    export class Monopoly {
        constructor(public board: Square[]) {
            throw new Error("TODO");
        }
    }
}