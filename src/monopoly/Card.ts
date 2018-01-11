/**
 * A card in the game of Monopoly.
 */
export interface Card {
    /**
     * The text on the card.
     */
    text: string;
    /**
     * The action to take.
     */
    action: "advance" | "back" | "choice" | "payeach" | "collecteach" | "doubletransport" | "earn" | "pay" | "stealmoney" | "stolenmoney" | "streetrepairs" | "gotojail";
    /**
     * The associated value.
     * May represent an amount of money to pay or collect, the square to go to or the money to pay for each house and hotel.
     */
    value?: string | number | number[];
}
