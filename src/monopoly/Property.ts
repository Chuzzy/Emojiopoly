import { Player } from "./Monopoly";

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

