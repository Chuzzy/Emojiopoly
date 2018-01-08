import { Property, Square } from "./Monopoly";

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
