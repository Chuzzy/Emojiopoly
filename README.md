![Emojiopoly logo](images/50transparent.png)

## About
Emojiopoly is a version of Monopoly that uses emoji instead of properties.
It currently supports up to 8 players.

## Where can I play?
You can play Emojiopoly at our website: [emojiopolyga.me](http://emojiopolyga.me).

## How do I play?
The rules are exactly the same as Monopoly.
These can be viewed at https://en.wikibooks.org/wiki/Monopoly/Official_Rules.

## House rules
| Rule                          | Description                              | Type      |
| :---------------------------- | :--------------------------------------- | :-------- |
| `needMonopolyToBuild`         | Whether players need a monopoly to build.| `Boolean` |
| `evenBuildRule`               | Improvements must be built on the property with the fewest buildings. | `Boolean` |
| `rentInJail`                  | Whether players can collect rent in jail. | `Boolean`       |
| `extraTurnOnRollingOutOfJail` | Whether an extra turns is awarded for rolling doubles to get out of jail. | `Boolean` |
| `tradeOutOfBankruptcy`        | Whether players can trade to pay off a debt they cannot afford.                       | `Boolean` |
| `bankCoversUnpaidRent`        | Whether the bank covers for unpaid rent when a player goes bankrupt.                  | `Boolean` |
| `bankruptAssetsAlwaysToBank`  | Whether the bank repossesses the assets of a player who goes bankrupt to an opponent. | `Boolean` |
| `purchaseMortgagedProperties` | Whether players can buy mortgaged properties from the bank. | `Boolean` |
| `freeParkingJackpot`          | The money awarded to a player when landing on Free Parking. |Union type|
| `goSalary`                    | The money awarded to a player when they pass Go. |`Number`|
| `landOnGo`                    | What happens when a player lands on Go. |Union type|
| `startingMoney`               | The amount of money players start with. |`Number`|
| `turnsInJail`                 | How many turns a player is allowed to stay in jail for before being forced to post bail. |`Number`|
| `bailAmount`                  | The amount of money a player needs to spend to pay to get out of jail. |`Number`|
| `maxConsecutiveDoubles`       | The number of consecutive doubles a player is allowed to roll before being sent to jail. |`Number`|
| `houseLimit`                  | The number of houses available. |`Number`|
| `hotelLimit`                  | The number of hotels available. Max 22. |`Number`|
| `mortgageRate`                | The percentage of the purchase price earned when a player mortgages a property. |`Number`|
| `unmortgageRate`              | The percentage of the purchase price spent when a player unmortgages a property. |`Number`|
| `maintenanceRate`             | The percentage of the purchase price spent per property per turn. |`Number`|
| `incomeTax`                   | The money that must be paid when landing on income tax. |`Number`|
| `superTax`                    | The money that must be paid when landing on super tax. |`Number`|

## License
This project's code is licensed under the [MIT](\LICENSE) license.

This project's icon uses the money bag emoji from Twitter's Twemoji project.
Twemoji are licensed under a Creative Commons 4.0 license.
https://creativecommons.org/licenses/by/4.0/

Have fun! 🍆
