import "Monopoly";

namespace Monopoly {
    /**
     * A player of the game.
     * @class
     */
    export class Player {
        public ownedProperties: Monopoly.Property[];

        constructor(public money: number = 1500) {
        }
    }
}