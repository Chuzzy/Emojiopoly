import "Property";

namespace Monopoly {
    /**
     * A square on the board.
     * @class
     */
    export class Square {
        constructor(
            public readonly squareType: "go" | "jail" | "gotojail" | "parking" | "property" | "chance" | "chest",
            public readonly property: Property | null
        ) {
            if (squareType !== "property" && property !== null) {
                throw new Error(`Cannot create a Square with a squareType of ${squareType} if property is not null.`);
            } else if (squareType === "property" && property === null) {
                throw new Error("Cannot create a Square with a squareType of property if property is null.");
            }
        }
    }
}