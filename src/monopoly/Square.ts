import { Player, Property } from "./Monopoly";

/**
 * A square on the board.
 * @class
 */
export class Square {
    public occupants: Player[];

    /**
     * Add a player to this square's occupants.
     * @param occupant The player to add to this square's occupants.
     */
    public addOccupant(occupant: Player) {
        this.occupants.push(occupant);
    }

    /**
     * Remove a player from this square's occupants.
     * @param occupant The player to remove from this square's occupants.
     */
    public removeOccupant(occupant: Player) {
        this.occupants.splice(this.occupants.indexOf(occupant), 1);
    }

    constructor(
        public readonly squareContents: "go" | "jail" | "gotojail" | "parking" | "chance" | "chest" | "incometax" | "supertax" | Property
    ) {
    }
}
